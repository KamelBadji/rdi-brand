import { rdiLayers } from '@/lib/rdi-data'

const layerStyles = [
  'border-rdi-ink bg-rdi-ink text-white',
  'border-rdi-accent bg-white text-rdi-ink',
  'border-[#d9a69a] bg-rdi-accent-soft text-rdi-ink',
  'border-rdi-rule bg-white text-rdi-ink',
  'border-rdi-rule bg-rdi-paper text-rdi-ink',
]

const widths = [
  'lg:max-w-[560px]',
  'lg:max-w-[680px]',
  'lg:max-w-[800px]',
  'lg:max-w-[920px]',
  'lg:max-w-[1040px]',
]

export function RDIStackPyramid() {
  return (
    <div className="border border-border bg-white p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <div className="border-b border-border pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
          <div className="font-mono text-xs uppercase text-rdi-accent">Capture to command</div>
          <p className="mt-4 text-sm leading-6 text-rdi-muted">
            Each layer only works when the layer below it is trustworthy. RDI moves upward
            from site capture to evidence, interpretation, action, and leadership command.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="border border-border p-3">
              <div className="text-2xl font-semibold text-rdi-ink">5</div>
              <div className="mt-1 text-rdi-muted">layers</div>
            </div>
            <div className="border border-border p-3">
              <div className="text-2xl font-semibold text-rdi-ink">1</div>
              <div className="mt-1 text-rdi-muted">loop</div>
            </div>
          </div>
        </div>
        <ol className="flex flex-col items-center gap-3">
          {rdiLayers.map((layer, index) => (
            <li
              className={[
                'grid w-full rounded-md border-l-4 px-5 py-4 text-left shadow-none md:grid-cols-[150px_1fr] md:items-center',
                layerStyles[index],
                widths[index],
              ].join(' ')}
              key={layer.id}
            >
              <div>
                <div className="font-mono text-xs uppercase opacity-80">Layer {layer.id}</div>
                <h3 className="mt-1 text-sm font-semibold uppercase">{layer.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 opacity-90 md:mt-0">{layer.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
