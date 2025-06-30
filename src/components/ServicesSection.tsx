import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ServicesSection() {
  const services = [
    {
      icon: "Building2",
      title: "Строительство",
      description:
        "Жилые и коммерческие объекты любой сложности. От фундамента до ключей.",
      features: [
        "Проектирование",
        "Строительство",
        "Отделка",
        "Благоустройство",
      ],
    },
    {
      icon: "Wrench",
      title: "Технологии",
      description:
        "Современные строительные технологии и инновационные решения.",
      features: [
        "Монолитное строительство",
        "Каркасные технологии",
        "Энергоэффективность",
        "Умный дом",
      ],
    },
    {
      icon: "Package",
      title: "Материалы",
      description:
        "Поставка качественных строительных материалов от проверенных производителей.",
      features: ["Стройматериалы", "Инструменты", "Отделка", "Доставка"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-gray mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр строительных услуг и материалов для реализации
            проектов любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-8">
                <div className="bg-construction-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-construction-blue"
                  />
                </div>

                <h3 className="text-2xl font-bold text-construction-gray mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-construction-blue mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
