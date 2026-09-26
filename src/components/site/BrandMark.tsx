export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <span className="inline-flex items-center gap-3" aria-label="GULFWELLBEING"><span className="grid size-9 place-items-center rounded-full border border-gold/60 font-serif text-lg text-gold">G</span>{!compact && <span><span className="block font-serif text-lg leading-none tracking-[0.16em]">GULFWELLBEING</span><span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-muted-foreground">Tarkan Wellbeing Advisor</span></span>}</span>;
}
