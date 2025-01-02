import { FC } from 'react';

interface SocialImpactMetric {
  title: string;
  value: string;
  description: string;
}

const impactMetrics: SocialImpactMetric[] = [
  {
    title: "Communities Served",
    value: "50+",
    description: "Local communities positively impacted through our initiatives"
  },
  {
    title: "Sustainability Score",
    value: "95%",
    description: "Reduction in environmental impact through green practices"
  },
  {
    title: "Social Programs",
    value: "25",
    description: "Active community development programs"
  }
];

const SocialImpactTab: FC = () => {
  return (
    <div className="py-8 space-y-8 w-full">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Social Impact
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          We're committed to making a positive difference in our communities through sustainable practices and social initiatives.
        </p>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
        {impactMetrics.map((metric, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-lg shadow-sm transition-shadow hover:shadow-md"
            role="article"
            tabIndex={0}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {metric.title}
            </h3>
            <p className="my-2 text-3xl font-bold text-blue-600">
              {metric.value}
            </p>
            <p className="text-gray-600">
              {metric.description}
            </p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <button
          className="px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => console.log('Learn more clicked')}
          aria-label="Learn more about our social impact initiatives"
        >
          Learn More About Our Impact
        </button>
      </section>
    </div>
  );
};

export default SocialImpactTab;