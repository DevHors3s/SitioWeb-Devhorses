/** Tracks deliberate scroll reversals and real absences, independent of rendering. */
export class HorsePresence {
  private scrollPeak: number | null = null;
  private awayAt: number | null = null;

  dismiss(scrollY: number) {
    this.scrollPeak = scrollY;
  }

  restore() {
    this.scrollPeak = null;
  }

  scroll(scrollY: number): boolean {
    if (this.scrollPeak === null) return false;
    this.scrollPeak = Math.max(this.scrollPeak, scrollY);
    if (scrollY > 8 && this.scrollPeak - scrollY < 48) return false;
    this.scrollPeak = null;
    return true;
  }

  leave(now: number) {
    // blur and visibilitychange can describe the same departure.
    if (this.awayAt === null) this.awayAt = now;
  }

  return(now: number): boolean {
    const elapsed = this.awayAt === null ? 0 : now - this.awayAt;
    this.awayAt = null;
    return elapsed >= 1500;
  }
}
