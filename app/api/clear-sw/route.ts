export async function GET() {
  return new Response(`
    <script>
      // Unregister all service workers
      navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(r => r.unregister());
      });

      // Clear all caches
      caches.keys().then(keys => {
        keys.forEach(k => caches.delete(k));
      });

      // Force refresh
      setTimeout(() => location.reload(true), 300);
    </script>
  `, {
    headers: { "Content-Type": "text/html" },
  });
}
