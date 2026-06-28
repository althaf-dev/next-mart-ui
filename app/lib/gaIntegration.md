# GA4 + GrowthBook A/B Testing  (Next.js)

## Objective

This project demonstrates how to integrate **Google Analytics 4 (GA4)** and **GrowthBook** into a Next.js application to implement:

- Feature Flags
- Runtime User Targeting
- A/B Testing
- Event Tracking
- Product Analytics

---

# Technologies

- Next.js (App Router)
- React
- Google Analytics 4
- Google Tag (gtag.js)
- GrowthBook
- Flags SDK
- @flags-sdk/growthbook

---

# Project Flow

```
                    User

                      │

                      ▼

             Next.js Application

        ┌─────────────┴─────────────┐

        ▼                           ▼

  GrowthBook                   Google Analytics

Feature Evaluation             Event Tracking

        │                           │

        ▼                           ▼

 Render Button                Store Analytics

        │

        ▼

 User Interaction

        │

        ▼

      GA4 Event

        │

        ▼

 Analytics Platform

        │

        ▼

 GrowthBook analyzes experiment
```

---

# Features Implemented

## 1. GA4 Integration

Integrated Google Analytics using

```tsx
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Automatically tracks

- page_view

Manually tracks

- blog_read
- add_to_cart
- custom events

---

## 2. Custom Events

Example

```ts
window.gtag("event", "blog_read", {
    title,
    category: "cms"
});
```

---

## 3. Custom Dimensions

Created custom dimensions for

- title
- category

Used Explore reports to analyze event parameters.

---

## 4. Funnel

Implemented sample funnel

```
Product Page

↓

Add To Cart

↓

Checkout

↓

Purchase
```

---

# GrowthBook

## Feature Flag

Feature Key

```
buy-buytton
```

Returns

```
Add To Cart

or

Buy Now
```

---

## SDK Integration

Installed

```
flags
@flags-sdk/growthbook
```

Environment Variables

```env
GROWTHBOOK_CLIENT_KEY=...
GROWTHBOOK_API_HOST=https://cdn.growthbook.io
```

---

## Feature Definition

```ts
export const buyButtonFlag = flag<string>({
    key: "buy-buytton",
    adapter: growthbookAdapter.feature<string>(),
    defaultValue: "add to cart",
    identify,
});
```

---

## identify()

Returns runtime user attributes.

Example

```ts
export async function identify() {
    return {
        id: "13478",
        country: "IN",
    };
}
```

Purpose

- Sticky Assignment
- Runtime Targeting

---

## Runtime Attributes

Configured in

```
SDK Connections
```

Added

- id
- country

These become available inside Targeting Rules.

---

## Targeting Rule

```
country == "IN"
```

↓

Serve

```
ADD TO CART INDIA
```

---

## Experiment

Created experiment

```
Control

↓

Add To Cart
```

vs

```
Variation

↓

Buy Now
```

Traffic

```
50%

50%
```

Assignment Attribute

```
id
```

---

# Important Concepts Learned

## Feature Flag

Enable or disable application functionality without deployment.

---

## Experiment

Compare multiple UI variations to determine which performs better.

---

## Force Rule

Always serve a specific value when a condition matches.

---

## Runtime Attributes

Attributes sent by the application.

Example

```json
{
    "id":"123",
    "country":"IN",
    "role":"customer"
}
```

Used for targeting.

---

## Sticky Assignment

GrowthBook hashes

```
User ID
```

to consistently assign the same variation.

---

## Default Value

If GrowthBook cannot evaluate a feature

↓

SDK returns

```ts
defaultValue
```

---

# Google Analytics Concepts

Learned

- Measurement ID
- Google Tag
- Google Tag Manager
- Custom Events
- Event Parameters
- Custom Dimensions
- Explore Reports
- Funnels
- UTM Parameters

---

# UTM Parameters

```
utm_source

utm_medium

utm_campaign

utm_term

utm_content
```

Purpose

Track marketing campaign performance.

Example

```
?utm_source=facebook
&utm_campaign=summer_sale
```

---

# A/B Testing Architecture

```
User

↓

GrowthBook

↓

Variation

↓

Frontend renders variation

↓

User clicks button

↓

GA4 stores event

↓

Analytics Data Source

↓

GrowthBook analyzes experiment
```

---

# Responsibilities of Frontend Developer

Responsible for

✅ Integrating GA4

✅ Sending Analytics Events

✅ Integrating GrowthBook SDK

✅ Sending Runtime Attributes

✅ Rendering Feature Variations

✅ Implementing Feature Flags

Not typically responsible for

❌ BigQuery Configuration

❌ Data Warehouse Setup

❌ Analytics Infrastructure

---

# Folder Structure

```
app/

components/

lib/
    flag.ts
    identify.ts

.env.local
```

---

# Files

## flag.ts

Defines Feature Flag

```ts
flag<string>()
```

---

## identify.ts

Provides runtime user attributes.

Example

```ts
{
    id,
    country
}
```

---

# Lessons Learned

- GA4 automatically tracks page views.
- Custom events require `gtag("event")`.
- Event parameters require Custom Dimensions for reporting.
- GrowthBook evaluates features at runtime.
- Runtime attributes enable targeting.
- User ID enables sticky assignment.
- Feature flags should keep experimentation logic outside React components.
- GrowthBook determines feature values.
- GA4 records user interactions.
- Experiment results are analyzed using analytics data.

---

# Interview Topics Covered

- Google Analytics 4
- Google Tag Manager
- Feature Flags
- GrowthBook
- Runtime Targeting
- Sticky Assignment
- Progressive Rollout
- Event Tracking
- Funnels
- Custom Dimensions
- A/B Testing
- Product Analytics

---

# Future Improvements

- Add Authentication (NextAuth)
- Identify real users from session
- Track experiment exposure
- Connect GrowthBook to BigQuery
- Measure experiment conversion
- Progressive Rollout