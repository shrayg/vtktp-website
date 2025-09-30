import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-white/5 border-white/10 text-white">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription className="text-white">{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose className="text-white hover:text-white/70" />
          </Toast>
        );
      })}
      <ToastViewport className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" />
    </ToastProvider>
  );
}
