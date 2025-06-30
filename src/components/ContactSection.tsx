import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <section className="py-20 bg-construction-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-construction-gray mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Получите бесплатную консультацию от
            наших специалистов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-gray">
                Оставьте заявку
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (xxx) xxx-xx-xx" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input placeholder="your@email.com" type="email" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  className="min-h-32"
                />
              </div>

              <Button className="w-full bg-construction-blue hover:bg-construction-blue/90 text-white py-3">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-construction-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Phone"
                      size={24}
                      className="text-construction-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-construction-gray mb-2">
                      Телефон
                    </h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 123-45-68</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-construction-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Mail"
                      size={24}
                      className="text-construction-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-construction-gray mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">info@venera-build.ru</p>
                    <p className="text-gray-600">office@venera-build.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-construction-blue/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="MapPin"
                      size={24}
                      className="text-construction-blue"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-construction-gray mb-2">
                      Адрес
                    </h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Строительная, д. 15
                      <br />
                      БЦ "Венера", офис 301
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
