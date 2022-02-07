# ReviewStore

This project creates a svelte-style [store](https://svelte.dev/docs#run-time-svelte-store) to cache [review records from the
Wanikani API](https://docs.api.wanikani.com/20170710/#reviews) in indexedDB on
each user's browser.

This is a re-write of Kumirei's [Review Cache]. Goals include:

- Updating the cache as you perform reviews. Ideally, the local cache should
  never be more than a few records behind when navigating to the dashboard.

- Use the "pub/sub" (publish/subscribe) model for notifying of asynchronous
  updates in "reactive" components.

- Backwards compatibility. Scripts using `get_reviews()` from the original
  Review Cache should expect exactly the same behavior.
