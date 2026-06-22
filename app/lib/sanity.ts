import { createClient } from "@sanity/client";

export const SanityClient = createClient({
  projectId: "82zdw8kn",
  dataset: "production",
});
