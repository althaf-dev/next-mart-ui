# Card Component Architecture

## Overview

The Card component follows the **Compound Component Pattern** combined with **React Context**.

The goal is to create a flexible and extensible card system where subcomponents can access shared card data without prop drilling.

### Benefits

* Composition over inheritance
* Open for extension
* Reduced prop drilling
* Better developer experience
* Discoverable API (`Card.Title`, `Card.Image`, etc.)
* Easier maintenance and scaling

---

# Design Patterns Used

## 1. Compound Component Pattern

The Card component exposes related functionality through static properties.

```tsx
<Card>
  <Card.Image />
  <Card.Title />
  <Card.Excerpt />
</Card>
```

Instead of:

```tsx
<Card>
  <Image />
  <Title />
  <Excerpt />
</Card>
```

### Why?

Compound Components provide:

* Namespacing
* Better discoverability
* Cleaner imports
* Easier API usage

Example:

```tsx
<Card.Title />
<Modal.Title />
<Dialog.Title />
```

This avoids naming collisions and clearly indicates ownership.

---

## 2. Context Pattern

The Card component shares data through React Context.

```tsx
<CardContext.Provider value={card}>
  {children}
</CardContext.Provider>
```

Subcomponents consume data using:

```tsx
const card = useContext(CardContext);
```

### Benefits

* Eliminates prop drilling
* Centralizes data
* Keeps APIs clean

Without Context:

```tsx
<Card.Image featImage={featImage} />
<Card.Title title={title} />
<Card.Excerpt excerpt={extract} />
```

With Context:

```tsx
<Card.Image />
<Card.Title />
<Card.Excerpt />
```

---

## 3. Composition Pattern

The Card component uses composition instead of inheritance.

```tsx
<Card>
  <Card.Image />
  <Card.Title />
  <Card.Excerpt />
</Card>
```

Rather than:

```tsx
class BlogCard extends Card
```

### Benefits

* More flexible
* Better React compatibility
* Easier extension

React strongly favors composition over inheritance.

---

# Architecture Diagram

```text
┌───────────────────────────┐
│         BlogCard          │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│           Card            │
│                           │
│  CardContext.Provider     │
│                           │
│  value = {               │
│    title                 │
│    featImage             │
│    extract               │
│  }                       │
└─────────────┬─────────────┘
              │
    ┌─────────┼─────────┐
    │         │         │
    ▼         ▼         ▼
┌────────┐ ┌───────┐ ┌─────────┐
│ Title  │ │ Image │ │ Excerpt │
└────────┘ └───────┘ └─────────┘
    │         │         │
    └─────────┴─────────┘
              │
              ▼
       useContext()
```

---

# Data Flow

```text
BlogCard
    │
    ▼
<Card card={blog}>
    │
    ▼
CardContext.Provider
    │
 ┌──┼──────────────┐
 │  │              │
 ▼  ▼              ▼
Title Image     Excerpt
 │    │             │
 ▼    ▼             ▼
Reads data from Context
```

---

# Component Responsibilities

## Card

Responsibilities:

* Layout container
* Context provider
* Shared data source

Example:

```tsx
<Card card={blog}>
  ...
</Card>
```

---

## Card.Title

Responsibilities:

* Render title
* Trigger analytics event

Example:

```tsx
<Card.Title />
```

Analytics:

```tsx
window.gtag("event", "block_read", {
  title: card.title,
  category: "cms",
});
```

---

## Card.Image

Responsibilities:

* Render featured image

Example:

```tsx
<Card.Image />
```

---

## Card.Excerpt

Responsibilities:

* Render summary text

Example:

```tsx
<Card.Excerpt />
```

---

## Card.Button

Responsibilities:

* Reusable action button

Example:

```tsx
<Card.Button onClick={handleRead}>
  Read More
</Card.Button>
```

---

# Usage Example

## Blog Card

```tsx
<Card card={blog}>
  <Card.Image />
  <Card.Title />
  <Card.Excerpt />

  <Card.Button onClick={handleRead}>
    Read More
  </Card.Button>
</Card>
```

---

# SOLID Principles

## Open/Closed Principle (OCP)

The Card component is open for extension without requiring changes to existing consumers.

Example:

```tsx
Card.Author = Author;
Card.Rating = Rating;
Card.Footer = Footer;
```

Existing usage:

```tsx
<Card>
  <Card.Image />
  <Card.Title />
</Card>
```

continues to work unchanged.

---

## Single Responsibility Principle (SRP)

| Component | Responsibility            |
| --------- | ------------------------- |
| Card      | Layout + Context Provider |
| Title     | Render title              |
| Image     | Render image              |
| Excerpt   | Render summary            |
| Button    | Render action button      |

Each component has a single responsibility.

---

# Why Context Was Introduced

### Before Context

```tsx
<Card.Image featImage={featImage} />
<Card.Title title={title} />
<Card.Excerpt excerpt={extract} />
```

Every child requires explicit props.

### After Context

```tsx
<Card.Image />
<Card.Title />
<Card.Excerpt />
```

Subcomponents automatically receive data from the Card provider.

Benefits:

* Cleaner API
* Less repetitive code
* Easier maintenance

---

# Future Extensions

Possible additions:

```tsx
<Card.Author />
<Card.Date />
<Card.Category />
<Card.Rating />
<Card.Footer />
<Card.Tags />
```

These can be added without modifying existing consumers.

---

# Recommended Improvement

Instead of:

```tsx
const CardContext = React.createContext<CardProps>({
  title: "",
  featImage: "",
});
```

Use:

```tsx
const CardContext = React.createContext<CardProps | null>(null);
```

Create a custom hook:

```tsx
function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "Card components must be used within Card"
    );
  }

  return context;
}
```

Benefits:

* Prevents misuse
* Improves debugging
* Common design-system pattern

---

# Folder Structure

```text
Card/
├── Card.tsx
├── CardContext.ts
├── CardTitle.tsx
├── CardImage.tsx
├── CardExcerpt.tsx
├── CardButton.tsx
├── index.ts
└── README.md
```

This structure keeps the implementation modular and scalable.
