import RevealOnScroll from "@/components/RevealOnScroll";

const predictions = [
  {
    date: "30 Nov 2022",
    person: "—",
    title: "Lanzamiento de ChatGPT",
    subtitle: "OpenAI",
    body: "ChatGPT irrumpe al mundo y consigue 1 millón de usuarios en 5 días. Comienza la era de la IA generativa. Nadie habla aún del fin de los programadores.",
    type: "event",
  },
  {
    date: "Feb 2023",
    person: "Sam Altman",
    company: "OpenAI — CEO",
    quote: "Los trabajos de programación tal como los conocemos van a desaparecer.",
    reality:
      "Altman buscaba posicionar a OpenAI como la empresa más innovadora del planeta. En 2026 los salarios de los programadores han subido un 23% y la demanda es récord.",
    type: "prediction",
  },
  {
    date: "14 Mar 2023",
    person: "—",
    title: "Lanzamiento de GPT-4",
    subtitle: "OpenAI",
    body: "GPT-4 demuestra capacidades extraordinarias: aprueba exámenes, escribe código complejo, razona. El pánico moral sobre el fin de la programación se intensifica.",
    type: "event",
  },
  {
    date: "25 Mar 2023",
    person: "Emad Mostaque",
    company: "Stability AI — CEO",
    quote: "En 5 años no va a haber programadores humanos.",
    reality:
      "Mostaque necesitaba inflar el hype para atraer inversores a Stability AI. La empresa casi quiebra en 2024 y él renunció. Los programadores siguen siendo más necesarios que nunca.",
    type: "prediction",
  },
  {
    date: "May 2023",
    person: "Jensen Huang",
    company: "NVIDIA — CEO",
    quote: "No aprendan a programar. El lenguaje de programación es la IA. Todo el mundo es programador ahora.",
    reality:
      "Huang quería vender más GPUs. En 2026 LinkedIn reporta que Python y TypeScript son las habilidades más demandadas. NVIDIA contrata cientos de ingenieros de software cada año.",
    type: "prediction",
  },
  {
    date: "Jun 2023",
    person: "Matt Welsh",
    company: "Ex-Google / Ex-Apple — Ingeniero",
    quote: "La programación como la conocemos va a ser obsoleta para 2030.",
    reality:
      "Welsh estaba promocionando su startup de IA Fixie.ai. En 2026 hay más de 30 millones de desarrolladores activos en GitHub, un récord histórico.",
    type: "prediction",
  },
  {
    date: "6 Nov 2023",
    person: "Sam Altman",
    company: "OpenAI — CEO (DevDay)",
    quote: "El software se va a escribir solo.",
    reality:
      "Altman presentaba GPT-4 Turbo ante inversores. Hoy los asistentes de código son herramientas que aumentan la productividad. Los desarrolladores senior son más valiosos que nunca.",
    type: "prediction",
  },
  {
    date: "Feb 2024",
    person: "—",
    title: "Devin: el primer 'Ingeniero IA'",
    subtitle: "Cognition Labs",
    body: "Cognition Labs presenta a Devin como el primer ingeniero de software autónomo. La demo viral lo muestra resolviendo tareas reales en Upwork. El pánico se dispara.",
    type: "event",
  },
  {
    date: "Feb 2024",
    person: "—",
    title: "El truco de Devin",
    subtitle: "Cognition Labs",
    body: "Se descubre que las demos de Devin eran altamente curadas. Cognition Labs, una empresa de 10 personas, usó la controversia para alcanzar una valuación de 2.000 millones de dólares.",
    type: "event",
  },
  {
    date: "Mar 2024",
    person: "Jensen Huang",
    company: "NVIDIA — CEO (GTC)",
    quote: "Todos son programadores ahora. Solo tienes que hablarle a la computadora.",
    reality:
      "Huang lanzaba la GPU Blackwell. La narrativa 'todos pueden programar' es marketing para expandir el mercado. Las empresas siguen compitiendo ferozmente por talento de ingeniería.",
    type: "prediction",
  },
  {
    date: "Abr 2024",
    person: "Sundar Pichai",
    company: "Google — CEO",
    quote: "Más del 25% del código nuevo en Google ya es escrito por IA.",
    reality:
      "Pichai enfrentaba críticas por ir detrás de OpenAI. Google invierte más que nunca en ingenieros. El código que genera IA siempre requiere revisión, depuración y supervisión humana.",
    type: "prediction",
  },
  {
    date: "May 2024",
    person: "Satya Nadella",
    company: "Microsoft — CEO",
    quote: "La IA va a cambiar fundamentalmente cómo se construye cada categoría de software.",
    reality:
      "Nadella promocionaba GitHub Copilot para impulsar Azure. En 2026 GitHub reporta que los desarrolladores que usan IA son más productivos, pero la demanda de nuevo talento no deja de crecer.",
    type: "prediction",
  },
  {
    date: "12 Sep 2024",
    person: "—",
    title: "OpenAI o1",
    subtitle: "OpenAI — Modelo de razonamiento",
    body: "OpenAI lanza o1, un modelo de razonamiento que obtiene resultados excepcionales en programación competitiva. Las predicciones apocalípticas se intensifican.",
    type: "event",
  },
  {
    date: "2025",
    person: "—",
    title: "Los CEOs se retractan",
    subtitle: "Varios",
    body: "Sam Altman dice: 'La IA va a crear más trabajos de los que elimina'. Jensen Huang admite: 'La programación sigue siendo una habilidad fundamental'. El tono cambia drásticamente.",
    type: "event",
  },
  {
    date: "Jun 2026",
    person: "—",
    title: "La realidad",
    subtitle: "—",
    body: "Los programadores no han desaparecido. La demanda es récord. La IA es una herramienta que aumenta la productividad, no un reemplazo. Las profecías eran, en su mayoría, estrategias de marketing para vender productos e inflar valuaciones.",
    type: "event",
  },
];

function Stamp() {
  return (
    <div className="pointer-events-none absolute right-4 top-4 animate-stamp select-none">
      <span className="inline-block rounded border-2 border-red-600 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-widest text-red-600 opacity-15 dark:border-red-400 dark:text-red-400">
        FALSA PROFECÍA
      </span>
    </div>
  );
}

function ScoreMark({ index, fail }: { index: number; fail: boolean }) {
  return (
    <div
      className="animate-count flex size-8 items-center justify-center rounded-full border-2 sm:size-10"
      style={{
        animationDelay: `${index * 0.1}s`,
        borderColor: fail ? "#d63031" : "#00b894",
        color: fail ? "#d63031" : "#00b894",
      }}
    >
      {fail ? (
        <svg className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
        </svg>
      ) : (
        <svg className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}

export default function Home() {
  const failCount = predictions.filter((p) => p.type === "prediction").length;

  return (
    <div className="min-h-screen bg-[#f2f0eb] font-body text-[#1e1b18] dark:bg-[#0a0d14] dark:text-[#e2ddd4]">
      {/* ─── HERO ─── */}
      <header className="relative overflow-hidden border-b border-[#e0dcd3] dark:border-[#1e221f]">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#c9975a 1px, transparent 1px), linear-gradient(90deg, #c9975a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-32">
          <RevealOnScroll>
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#c9975a]">
              Desde ChatGPT hasta hoy
            </p>
            <h1 className="font-display text-4xl leading-tight font-black tracking-tight sm:text-6xl sm:leading-[1.1]">
              Las profecías que
              <br />
              <span className="text-[#c9975a]">no se cumplieron</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6b6258] dark:text-[#8a8278] sm:text-lg">
              Los CEOs más poderosos del mundo anunciaron el fin de los programadores.
              Cada declaración tenía algo en común: buscaban venderte un producto.
              Esto es lo que dijeron, y lo que realmente pasó.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mx-auto mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#e0dcd3] bg-white/60 px-6 py-4 backdrop-blur dark:border-[#1e221f] dark:bg-[#0a0d14]/60">
              <span className="mr-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#6b6258] dark:text-[#8a8278]">
                Aciertos
              </span>
              <ScoreMark index={0} fail={false} />
              <span className="mx-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#6b6258] dark:text-[#8a8278]">
                Fallos
              </span>
              {Array.from({ length: failCount }).map((_, i) => (
                <ScoreMark key={i} index={i + 1} fail />
              ))}
              <span className="ml-3 font-mono text-xs text-[#6b6258] dark:text-[#8a8278]">
                0 / {failCount}
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </header>

      {/* ─── TIMELINE ─── */}
      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-0.5 timeline-line sm:left-[23px]" />

          <div className="space-y-16 sm:space-y-20">
            {predictions.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className="relative pl-12 sm:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[11px] top-1.5 size-[18px] rounded-full border-2 sm:left-[13px] sm:size-[22px] ${
                      item.type === "prediction"
                        ? "border-[#d63031] bg-[#fef2f2] dark:bg-[#200a0a]"
                        : "border-[#c9975a] bg-[#fdf8f0] dark:bg-[#14100a]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`group relative rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 ${
                      item.type === "prediction"
                        ? "border-l-[3px] border-l-[#d63031]"
                        : "border-l-[3px] border-l-[#c9975a]"
                    } dark:border-[#1e221f] dark:bg-[#101317]`}
                  >
                    {item.type === "prediction" && <Stamp />}

                    {/* Date */}
                    <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-[#c9975a]">
                      {item.date}
                    </p>

                    {/* Title */}
                    {item.person !== "—" && (
                      <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                        {item.person}
                      </h3>
                    )}
                    {item.title && (
                      <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                        {item.title}
                      </h3>
                    )}
                    {item.company !== "—" && item.company && (
                      <p className="mt-0.5 font-mono text-xs font-medium text-[#6b6258] dark:text-[#8a8278]">
                        {item.company}
                      </p>
                    )}
                    {item.subtitle && item.subtitle !== "—" && (
                      <p className="mt-0.5 font-mono text-xs font-medium text-[#6b6258] dark:text-[#8a8278]">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Quote or body */}
                    {item.quote && (
                      <div className="relative mt-3 rounded-lg bg-[#fef2f2] p-3 dark:bg-[#200a0a]">
                        <p className="font-display text-sm leading-relaxed italic text-[#991b1b] dark:text-[#fca5a5]">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    )}
                    {item.body && (
                      <p className="mt-3 text-sm leading-relaxed text-[#4b4540] dark:text-[#a09890]">
                        {item.body}
                      </p>
                    )}

                    {/* Reality */}
                    {item.reality && (
                      <div className="mt-3 rounded-lg bg-[#f0fdf4] p-3 dark:bg-[#052e16]">
                        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#15803d] dark:text-[#4ade80]">
                          ✦ Lo que realmente pasó
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#166534] dark:text-[#bbf7d0]">
                          {item.reality}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ─── CONCLUSION ─── */}
        <RevealOnScroll>
          <div className="relative mt-20 overflow-hidden rounded-xl border border-[#e0dcd3] bg-white p-6 sm:p-10 dark:border-[#1e221f] dark:bg-[#101317]">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(#c9975a 1px, transparent 1px), linear-gradient(90deg, #c9975a 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                La próxima vez que un CEO lo anuncie...
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4b4540] dark:text-[#a09890] sm:text-lg">
                pregúntate:{" "}
                <span className="font-bold text-[#1e1b18] dark:text-[#e2ddd4]">
                  ¿qué producto están vendiendo?
                </span>
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#4b4540] dark:text-[#a09890] sm:text-lg">
                La IA es una herramienta extraordinaria, pero los programadores no van a
                desaparecer. Van a programar con mejores herramientas. Como ha ocurrido
                desde que existe la informática.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#e0dcd3] py-8 text-center dark:border-[#1e221f]">
        <p className="font-mono text-xs tracking-wide text-[#6b6258] dark:text-[#8a8278]">
          Los programadores seguimos aquí
        </p>
      </footer>
    </div>
  );
}
