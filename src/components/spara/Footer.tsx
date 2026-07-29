import logo from "@/assets/spara-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between lg:px-10">
        <div className="flex items-center gap-2.5">
          <img src={logo.url} alt="" width={28} height={28} className="size-6 rounded-[8px]" />
          <span className="font-semibold text-foreground">Spara</span>
        </div>
        <p>© {new Date().getFullYear()} Spara. One choice at a time.</p>
      </div>
    </footer>
  );
}