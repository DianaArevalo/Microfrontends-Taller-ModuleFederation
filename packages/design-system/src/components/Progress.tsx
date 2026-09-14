export interface ProgressProps {
  value: number;
  max: number;
  label?: string;
  note?: string;
}

export function Progress({ value, max, label, note }: ProgressProps) {
  const percent = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="ds-progress">
      {label ? (
        <div className="ds-progress-row">
          <span className="ds-progress-label">{label}</span>
          {note ? <span className="ds-progress-note">{note}</span> : null}
        </div>
      ) : null}
      <div className="ds-progress-track">
        <div className="ds-progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}