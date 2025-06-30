import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-construction-gray to-construction-gray/90 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Строительная компания "Венера"
            <span className="block text-construction-blue">Строим будущее</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Профессиональное строительство и поставка качественных строительных
            материалов. Современные технологии, надёжная команда,
            гарантированный результат.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-construction-blue hover:bg-construction-blue/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-construction-gray px-8 py-4 text-lg"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Портфолио проектов
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-construction-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Building"
                  size={32}
                  className="text-construction-blue"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-gray-300">На строительном рынке</p>
            </div>

            <div className="text-center">
              <div className="bg-construction-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Users"
                  size={32}
                  className="text-construction-blue"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">200+ проектов</h3>
              <p className="text-gray-300">Успешно реализовано</p>
            </div>

            <div className="text-center">
              <div className="bg-construction-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Award"
                  size={32}
                  className="text-construction-blue"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% гарантия</h3>
              <p className="text-gray-300">На все виды работ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
