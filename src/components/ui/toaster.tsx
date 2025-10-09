import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-card border-border text-foreground">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription className="text-foreground">{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose className="text-foreground hover:text-muted-foreground" />
          </Toast>
        );
      })}
      <ToastViewport className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" />
    </ToastProvider>
  );
}
