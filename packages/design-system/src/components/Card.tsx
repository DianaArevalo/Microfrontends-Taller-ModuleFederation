import type { ReactNode } from 'react';

export interface CardProps {
  title?: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, note, children, className = '' }: CardProps) {
  const hasHeader = title !== undefined || note !== undefined;
  const classNames = ['ds-card', className].filter(Boolean).join(' ');
  return (
    <section className={classNames}>
      {hasHeader ? (
        <header className="ds-card-head">
          {title !== undefined ? <h3 className="ds-card-title">{title}</h3> : null}
          {note !== undefined ? <span className="ds-card-note">{note}</span> : null}
        </header>
      ) : null}
      <div className="ds-card-body">{children}</div>
    </section>
  );
}