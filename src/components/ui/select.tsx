import * as React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, value, onValueChange, onChange, ...props }: any, ref) => {
    return (
      <select
        ref={ref}
        value={value}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.target.value);
        }}
        className={
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " +
          className
        }
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";

const SelectTrigger = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
};

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  return <span>{placeholder}</span>;
};

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const SelectItem = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return <option value={value}>{children}</option>;
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
