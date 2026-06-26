type AuthLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex items-center justify-center border-r border-white/10">
          <div className="max-w-lg space-y-6 px-10">
            <h1 className="text-5xl font-bold tracking-tight">
              VerifyData.AI
            </h1>

            <p className="text-muted-foreground text-lg leading-8">
              Transform invoices, receipts, identity documents and
              tables into structured Excel and Google Sheets using AI.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6">
          {children}
        </div>
      </section>
    </main>
  );
}