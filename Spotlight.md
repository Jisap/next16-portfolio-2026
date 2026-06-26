# `<Spotlight />` — Documentación del componente

> Componente React + SVG que renderiza un foco de luz animado (óvalo difuminado) pensado para hero sections y secciones destacadas.

---

## 📦 Ubicación

```
src/components/ui/spotlight.tsx     # componente
src/app/globals.css                  # keyframe `spotlight`
```

> Requiere Tailwind CSS v4 (por el `@theme inline` con `--animate-spotlight`) y el helper `cn` de `@/lib/utils`.

---

## 🚀 Uso básico

```tsx
import { Spotlight } from "@/components/ui/spotlight";

<section className="relative overflow-hidden bg-black">
  <Spotlight />
  <div className="relative z-10">
    {/* contenido que va encima del foco */}
  </div>
</section>
```

---

## ⚙️ Props

| Prop        | Tipo       | Default   | Descripción                                                                 |
|-------------|------------|-----------|-----------------------------------------------------------------------------|
| `className` | `string?`  | —         | Clases Tailwind extra. Se usa típicamente para **posicionar** el foco.       |
| `fill`      | `string?`  | `"white"` | Color del óvalo. Acepta cualquier valor válido de `fill` en SVG (hex, rgb…). |

> El componente no acepta `children`, `style` ni otras props: es intencionalmente minimalista.

---

## 🎨 Anatomía visual

```
┌─────────────────────────────────────────────────────────────┐
│  Section (relative, overflow-hidden, fondo oscuro)          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  <Spotlight /> ← SVG absoluto, enorme, difuminado    │  │
│  │  ┌─────────────────────────────────────────────┐      │  │
│  │  │  Contenido (relative z-10, z-index alto)    │      │  │
│  │  │  - Título                                  │      │  │
│  │  │  - Subtítulo                               │      │  │
│  │  │  - CTA                                     │      │  │
│  │  └─────────────────────────────────────────────┘      │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎞️ La animación

Definida en `globals.css`:

```css
@theme inline {
  --animate-spotlight: spotlight 2s ease 0.75s 1 forwards;
}

@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}
```

| Parámetro      | Valor      | Significado                                              |
|----------------|------------|----------------------------------------------------------|
| Duración       | `2s`       | Tiempo total de la animación.                            |
| Easing         | `ease`     | Aceleración suave (acelera al inicio, frena al final).   |
| Delay          | `0.75s`    | Espera antes de empezar (sincroniza tras la entrada).    |
| Iteraciones    | `1`        | Una sola vez.                                            |
| Fill mode      | `forwards` | Se queda en el estado final tras ejecutarse.             |

**Trayectoria del foco:**
1. Arranca **fuera de cuadro** (arriba-izquierda), pequeño y transparente.
2. Crece, se desplaza hacia el centro y gana opacidad.
3. Termina en su posición final visible.

---

## 🧩 Receta: posicionamiento recomendado

El SVG mide `3787×2842` (es deliberadamente gigante para poder recortarse). Usa `className` para colocarlo:

```tsx
{/* Foco desde la esquina superior izquierda */}
<Spotlight className="-top-40 -left-40 md:-top-20 md:left-0" fill="white" />

{/* Foco desde la esquina superior derecha */}
<Spotlight className="-top-40 -right-40 md:-top-20 md:right-0" fill="white" />
```

### Consejos

- **Siempre** envuelve en un contenedor con `relative overflow-hidden`. Si no, el SVG se desborda.
- **El contenido debe llevar `relative z-10`** (o superior) para quedar encima del foco.
- **Usa fondos oscuros** (`bg-black`, `bg-neutral-950`, `bg-zinc-900`…) para que el foco blanco se aprecie.
- Combina **dos `<Spotlight />` en esquinas opuestas** para un look más cinematográfico.

---

## 🧪 Ejemplos

### 1. Hero clásico (un foco, arriba a la izquierda)

```tsx
<section className="relative overflow-hidden bg-black py-32">
  <Spotlight className="-top-40 left-0 md:-top-20 md:left-0" />
  <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
    <h1 className="text-5xl font-bold">Construye más rápido.</h1>
    <p className="mt-4 text-lg text-neutral-300">
      La plataforma todo-en-uno para tu equipo.
    </p>
  </div>
</section>
```

### 2. Hero cinematográfico (dos focos en diagonal)

```tsx
<section className="relative overflow-hidden bg-neutral-950 py-32">
  <Spotlight className="-top-40 -left-40" fill="white" />
  <Spotlight className="-top-40 -right-40" fill="purple" />
  <div className="relative z-10 ...">...</div>
</section>
```

### 3. Sección de CTA

```tsx
<section className="relative overflow-hidden bg-zinc-900">
  <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="blue" />
  <div className="relative z-10 px-6 py-24 text-center text-white">
    <h2>¿Listo para empezar?</h2>
    <Button>Crear cuenta</Button>
  </div>
</section>
```

---

## 🛠️ Cómo personalizarlo

### Cambiar el color del foco
```tsx
<Spotlight fill="#a78bfa" />   {/* violeta */}
<Spotlight fill="#22d3ee" />   {/* cian */}
```

### Cambiar el color de fondo (Tailwind v4)
```tsx
<section className="bg-black">...</section>
```

### Cambiar intensidad (modificar el SVG)
Abre `spotlight.tsx` y ajusta:
- `fillOpacity="0.21"` → más bajo = más sutil, más alto = más intenso.
- `<feGaussianBlur stdDeviation="151" />` → más bajo = foco más nítido, más alto = más difuso.

### Cambiar el timing
En `globals.css`:
```css
--animate-spotlight: spotlight 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s 1 forwards;
```

### Reutilizar la keyframe en otros elementos
```css
.mi-clase {
  animation: spotlight 2s ease 0.75s 1 forwards;
}
```

---

## ⚠️ Buenas prácticas y caveats

- **No pongas el `<Spotlight />` dentro de un contenedor con `display: flex/grid`** sin `relative` — perderás el posicionamiento absoluto.
- **No lo coloques sobre fondos claros** sin ajustar el `fill` (con blanco no se verá).
- **Evita anidar varios focos muy juntos** — se solaparán los desenfoques y el efecto se vuelve turbio.
- **`pointer-events-none`** está aplicado por defecto, así que **no bloquea clicks** sobre el contenido.
- El SVG tiene `opacity-0` inicial → la animación es la que lo hace visible. **No quites la clase `animate-spotlight`** o el foco quedará invisible.

---

## 🧭 Resumen rápido

| Quiero…                          | Hago esto                                                    |
|----------------------------------|--------------------------------------------------------------|
| Un foco en la hero               | `<Spotlight />` con `className="-top-40 left-0"`             |
| Cambiar el color                 | `<Spotlight fill="purple" />`                                |
| Que sea más intenso              | Subir `fillOpacity` en el SVG                                |
| Que sea más nítido               | Bajar `stdDeviation` en el `<feGaussianBlur>`                |
| Que el foco entre más rápido     | Reducir duración y delay en `--animate-spotlight`             |
| Varios focos en una sección      | Renderizar varios `<Spotlight />` con distintos `className`  |

---

*Última actualización: junio 2026*
