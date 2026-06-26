import * as tsparticlesReact from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ns = tsparticlesReact as any;

/**
 * Wrapper safe de initParticlesEngine que funciona
 * con cualquier sub-ruta de export del paquete.
 */
export const initParticlesEngine = ((): (
    cb: (engine: any) => Promise<void> | void
) => Promise<void> => {
    if (typeof ns.initParticlesEngine === "function") {
        return ns.initParticlesEngine.bind(ns);
    }
    if (ns.default && typeof ns.default.initParticlesEngine === "function") {
        return ns.default.initParticlesEngine.bind(ns.default);
    }
    return async () => { };
})();

export const Particles = ns.Particles;
export { loadSlim };