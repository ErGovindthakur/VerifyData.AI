import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormFieldProps = Readonly<{
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  className?: string;
}> &
  React.InputHTMLAttributes<HTMLInputElement>;

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />

      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}