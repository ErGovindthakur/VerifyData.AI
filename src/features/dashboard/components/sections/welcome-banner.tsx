type WelcomeBannerProps = Readonly<{
  name: string;
}>;

export function WelcomeBanner({
  name,
}: WelcomeBannerProps) {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome back, {name} 👋
      </h1>

      <p className="text-muted-foreground">
        Here is an overview of your document
        processing activity.
      </p>
    </section>
  );
}