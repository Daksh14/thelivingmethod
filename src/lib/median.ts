import { Median } from "cms-renderer";
import { registry } from "@/lib/registry";

const { MEDIAN_API_KEY, MEDIAN_WEBSITE_ID, DATASET_ENDPOINT, MEDIAN_CMS_URL } = process.env;

if (!MEDIAN_WEBSITE_ID || !DATASET_ENDPOINT) {
  throw new Error("MEDIAN_WEBSITE_ID and DATASET_ENDPOINT must be set.");
}

/** The CMS origin that frames draft previews; their edit messages go only there. */
export const cmsUrl = MEDIAN_CMS_URL || "https://app.mediancms.com";

/** The site's Median client. Server-only: it holds the API key. */
export const median = new Median({
  apiKey: MEDIAN_API_KEY,
  datasetEndpoint: DATASET_ENDPOINT,
  websiteId: MEDIAN_WEBSITE_ID,
  registry,
  // Published pages are prerendered once per build; drafts are never cached.
  revalidate: false,
});
