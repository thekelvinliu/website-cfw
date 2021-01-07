import b2ProxyHandler from 'cloud-blaze';

// one week in seconds
const ONE_WEEK_TTL = 604800;

// main
addEventListener('fetch', event => {
  event.respondWith(
    b2ProxyHandler({
      event,
      cacheTtl: ONE_WEEK_TTL
    })
  );
});
