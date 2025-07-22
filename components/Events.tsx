import { motion } from 'framer-motion';
import { CalendarIcon } from '@/components/ui/svgs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const UpcomingEventsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="events"
      className="bg-muted text-foreground min-h-screen py-12 md:py-24 flex flex-col items-center justify-center space-y-12"
    >
      <div className="container px-4 md:px-6 space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-begin" data-aos="fade-up">
          Upcoming Events
        </h2>
        <div className="flex justify-center">
          <Card data-aos="fade-up" data-aos-delay="100" className="max-w-md w-full">
            <CardHeader>
              <CardTitle>AI Workshop</CardTitle>
              <CardDescription>
                Unlock the power of Artificial Intelligence in this hands-on workshop.
                Learn the fundamentals of AI, explore real-world applications, and build your own AI-driven project using accessible tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 inline" />
                  <span>July 25, 2025</span>
                </div>
                <Link href="/eventsregistration">
                  <Button variant="secondary" size="sm">
                    Register
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingEventsSection;
  