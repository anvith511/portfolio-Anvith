import { FileX } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export function EmptyState({ title = 'No data', message = 'Nothing to display yet.', icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      {icon || <FileX className="w-12 h-12 text-[var(--muted-foreground)]" strokeWidth={1} />}
      <div>
        <p className="font-mono text-sm font-medium">{title}</p>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">{message}</p>
      </div>
    </div>
  );
}
