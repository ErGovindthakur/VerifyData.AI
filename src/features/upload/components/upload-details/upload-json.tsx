type Props = Readonly<{
  data: unknown;
}>;

export function UploadJson({
  data,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Extracted JSON
      </h2>

{/* Starts here  */}
 <pre className="overflow-auto rounded-lg bg-muted p-4 text-sm">
        {JSON.stringify(
          data,
          null,
          2
        )}
      </pre>
</div>
  );
}