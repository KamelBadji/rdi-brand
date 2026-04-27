import { rdiLayers } from '@/lib/rdi-data'

const verbByLayer: Record<number, string> = {
  1: 'Capture',
  2: 'Verify',
  3: 'Interpret',
  4: 'Act',
  5: 'Command',
}

const widths: Record<number, string> = {
  5: '38%',
  4: '58%',
  3: '76%',
  2: '90%',
  1: '100%',
}

const toneByLayer: Record<number, string> = {
  5: 'border-rdi-ink bg-rdi-ink text-white',
  4: 'border-rdi-accent-strong bg-rdi-accent-strong text-white',
  3: 'border-rdi-accent bg-rdi-accent/75 text-white',
  2: 'border-rdi-rule-strong bg-white text-rdi-ink',
  1: 'border-rdi-rule bg-rdi-paper text-rdi-ink',
}

export function RDIStackPyramid() {
  const orderedLayers = [...rdiLayers].sort((a, b) => b.id - a.id)

  return (
    <figure className="border border-border bg-white p-5 md:p-8" aria-label="The five layers of Reality-Driven Intelligence">
      <div className="mb-8 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold text-rdi-accent">The canonical stack</p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-rdi-ink md:text-3xl">
            Capture to command
          </h3>
        </div>
        <p className="max-w-2xl text-sm leading-[1.65] text-rdi-muted">
          Each layer depends on the layer beneath it. RDI becomes valuable when captured reality
          becomes evidence, interpretation, action, and measured command.
        </p>
      </div>

      <ol className="grid gap-3">
        {orderedLayers.map((layer) => (
          <li
            className="grid items-stretch gap-3 md:grid-cols-[128px_minmax(0,1fr)] md:gap-6"
            key={layer.id}
          >
            <div className="flex items-center justify-between border border-border bg-white px-4 py-3 text-rdi-ink md:justify-end md:border-0 md:bg-transparent md:px-0 md:text-right">
              <span className="text-lg font-semibold md:text-xl">{verbByLayer[layer.id]}</span>
              <span className="font-mono text-sm text-rdi-muted md:hidden">Layer {layer.id}</span>
            </div>
            <div className="md:flex md:justify-center">
              <div
                className={[
                  'w-full border px-5 py-5 text-center md:px-8',
                  toneByLayer[layer.id],
                ].join(' ')}
                style={{ maxWidth: widths[layer.id] }}
              >
                <p className="font-mono text-sm font-semibold uppercase opacity-75">
                  {layer.id}. {layer.title}
                </p>
                <p className="mt-3 text-base font-semibold leading-[1.45] md:text-lg">
                  {layer.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <figcaption className="mt-8 border-t border-border pt-5 text-sm leading-[1.65] text-rdi-muted">
        Read from the bottom up: capture creates the record, ground truth makes it reliable,
        interpretation explains change, action routes responsibility, and command measures outcomes.
      </figcaption>
    </figure>
  )
}
