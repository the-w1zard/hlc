export declare function splitHLC(ts: string): [number, number, string];
export declare function parseHLC(ts: string): [number, number];
/**
 * Structural check that a value looks like an HLC timestamp.
 * Not a validity check — `"9999999999999:9999:any"` passes. Use this at
 * bus boundaries to reject obvious garbage (nulls, non-strings, empty).
 */
export declare function isHLCTimestamp(v: unknown): v is HLCTimestamp;
export declare class HYBRID_LOGICAL_CLOCK_CRDT {
    private wallTime;
    private logical;
    private readonly nodeId;
    private static readonly MAX_SKEW_MS;
    constructor(nodeId?: string);
    tick(): string;
    update(remoteTimestamp: string): void;
    compare(a: string, b: string): number;
    private stamp;
}
export declare class HYBRID_LOGICAL_CLOCK {
    private wallTime;
    private logical;
    private readonly nodeId;
    constructor(nodeId?: string);
    tick(): string;
    update(remoteTimestamp: string): void;
    compare(a: string, b: string): number;
}
/** Opaque HLC timestamp in wire format. */
export type HLCTimestamp = string;
/** Wire-format timestamp split into its three components. */
export type HLCParts = readonly [wall: number, logical: number, node: string];
/** The two numeric fields of an HLC — what `parseHLC` returns. */
export type HLCParsed = readonly [wall: number, logical: number];
/** Node identity — stable per HLC instance, unique across the mesh. */
export type HLCNodeId = string;
export interface IHLC {
    /** Produce the next timestamp for a locally-originated event. */
    tick(): HLCTimestamp;
    /** Merge a remote timestamp into the local clock. */
    update(remote: HLCTimestamp): void;
    /** Total order — returns <0, 0, >0 like a standard comparator. */
    compare(a: HLCTimestamp, b: HLCTimestamp): number;
}
/** The static side of the HLC class — exposed as `fn.class` on the IIFE. */
export interface IHLCClass {
    new (nodeId?: string): IHLC;
    readonly MAX_SKEW_MS: number;
}
/** `staff.HLC()` — lazily constructs and returns the singleton instance. */
export type HLCFactory = (() => IHLC) & {
    /** The class itself. `staff.HLC.class` is the constructor. */
    class: IHLCClass;
    /** `staff.HLC.new()` — constructs a fresh instance (not the singleton). */
    new (): IHLC;
};
export type SplitHLC = (ts: HLCTimestamp) => HLCParts;
export type ParseHLC = (ts: HLCTimestamp) => HLCParsed;
/** Full surface of `staff.HLC` — callable + metadata + helpers. */
export type HLCSurface = HLCFactory & {
    splitHLC: SplitHLC;
    parseHLC: ParseHLC;
};
//# sourceMappingURL=index.d.ts.map