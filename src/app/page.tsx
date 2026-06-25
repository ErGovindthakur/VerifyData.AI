import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <Section>
      <Container>
        <GlassCard className="p-10">
          <h1 className="text-4xl font-bold">VerifyData.AI</h1>

          <p className="text-muted-foreground mt-4">AI Powered Document Extraction Platform</p>
        </GlassCard>
      </Container>
    </Section>
  );
}
