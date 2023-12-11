export type Mods = Record<string, boolean | string | undefined>;

/**
 * Function to create property className for components
 * @param cls
 * @param mods
 * @param additional
 * @returns
 */
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
