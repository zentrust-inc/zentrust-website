import Link from "next/link";

/* A slim GivingTuesday banner. It shows until the end of GivingTuesday
   (1 December 2026, US Pacific time) and then disappears on its own.
   Pages using it render on request, so the date check runs at view time.
   mt-16 keeps it below the fixed 64px site header. */

const GIVING_TUESDAY_ENDS = Date.parse("2026-12-02T08:00:00Z"); // midnight Pacific, 1→2 Dec

export function GivingTuesdayBanner() {
  if (Date.now() >= GIVING_TUESDAY_ENDS) return null;
  return (
    <aside
      aria-label="GivingTuesday"
      className="relative z-30 mt-16 w-full bg-emerald-800 px-4 py-3 text-center text-sm text-white sm:text-base"
    >
      <span className="font-semibold">GivingTuesday is Tuesday, 1 December.</span>{" "}
      Help fund the first year of water and forest work in Chauthe, Nepal.{" "}
      <Link href="/givingtuesday" className="font-semibold underline underline-offset-2 hover:text-emerald-100">
        See how your gift would be used
      </Link>
    </aside>
  );
}
