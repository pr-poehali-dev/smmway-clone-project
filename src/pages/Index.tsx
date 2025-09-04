import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "SMM Продвижение",
      description: "Комплексное продвижение в социальных сетях",
      icon: "TrendingUp",
      price: "от 15,000₽"
    },
    {
      title: "Контент-план",
      description: "Профессиональная разработка контент-стратегии",
      icon: "Calendar",
      price: "от 8,000₽"
    },
    {
      title: "Таргетированная реклама",
      description: "Настройка и ведение рекламных кампаний",
      icon: "Target",
      price: "от 20,000₽"
    },
    {
      title: "Аналитика",
      description: "Детальная аналитика и отчёты по продвижению",
      icon: "BarChart3",
      price: "от 5,000₽"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      company: "TechStart",
      text: "Превосходное качество работы! Увеличили охват в 5 раз за 2 месяца.",
      rating: 5
    },
    {
      name: "Мария Петрова", 
      company: "Beauty Studio",
      text: "Профессиональная команда. Результат превзошёл ожидания!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      company: "Fitness Club",
      text: "Отличный сервис и поддержка. Рекомендую всем!",
      rating: 5
    }
  ];

  const prices = [
    {
      name: "Стартовый",
      price: "15,000₽",
      period: "/месяц",
      features: ["3 соцсети", "15 постов", "Базовая аналитика", "Техподдержка"]
    },
    {
      name: "Профи",
      price: "35,000₽", 
      period: "/месяц",
      features: ["5 соцсетей", "30 постов", "Расширенная аналитика", "Таргет", "Приоритетная поддержка"],
      popular: true
    },
    {
      name: "Максимум",
      price: "55,000₽",
      period: "/месяц", 
      features: ["Все соцсети", "50+ постов", "Полная аналитика", "Премиум таргет", "Персональный менеджер"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-red via-brand-turquoise to-brand-blue">
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold font-montserrat bg-gradient-to-r from-brand-red to-brand-turquoise bg-clip-text text-transparent">
                SMM ↗
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 font-open-sans">
              <a href="#services" className="text-gray-700 hover:text-brand-red transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-brand-red transition-colors">О нас</a>
              <a href="#prices" className="text-gray-700 hover:text-brand-red transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-brand-red transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-brand-red transition-colors">Контакты</a>
            </nav>
            <div className="flex space-x-2">
              <Button 
                onClick={() => window.open('https://t.me/ezeyextman', '_blank')}
                className="bg-brand-turquoise hover:bg-brand-blue text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button 
                onClick={() => window.open('https://vk.com/koristaru', '_blank')}
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                VK
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold font-montserrat text-white mb-6 leading-tight">
              SMM агентство
              <span className="block bg-gradient-to-r from-white to-brand-yellow bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-open-sans">
              Превращаем ваши социальные сети в мощный инструмент продаж
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-brand-red hover:bg-brand-yellow hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-montserrat font-semibold"
              >
                Начать проект
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-red text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold font-montserrat text-brand-gray mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Полный спектр услуг для успешного продвижения в социальных сетях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-turquoise rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-semibold text-brand-gray">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4 font-open-sans">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold font-montserrat bg-gradient-to-r from-brand-red to-brand-turquoise bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold font-montserrat text-brand-gray mb-8">
                О нас
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-open-sans leading-relaxed">
                Мы — команда экспертов с многолетним опытом в сфере цифрового маркетинга. 
                Наша миссия — помогать бизнесу достигать новых высот через эффективное продвижение в социальных сетях.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-open-sans leading-relaxed">
                За 5 лет работы мы помогли более 500 компаниям увеличить продажи и узнаваемость бренда.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold font-montserrat text-brand-red">500+</div>
                  <div className="text-sm text-gray-600 font-open-sans">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-montserrat text-brand-turquoise">5</div>
                  <div className="text-sm text-gray-600 font-open-sans">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-montserrat text-brand-blue">98%</div>
                  <div className="text-sm text-gray-600 font-open-sans">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-turquoise rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold font-montserrat text-brand-gray mb-6">Наша команда</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-red to-brand-turquoise rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold font-montserrat">Анна Смирнова</div>
                        <div className="text-sm text-gray-600 font-open-sans">SMM-стратег</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-turquoise to-brand-blue rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold font-montserrat">Игорь Волков</div>
                        <div className="text-sm text-gray-600 font-open-sans">Контент-менеджер</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold font-montserrat">Елена Козлова</div>
                        <div className="text-sm text-gray-600 font-open-sans">Дизайнер</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat text-brand-gray mb-6">
              Тарифы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-2 border-brand-red shadow-2xl' 
                  : 'border border-gray-200 hover:shadow-xl'
              }`}>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-brand-red to-brand-turquoise text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-montserrat font-bold text-brand-gray">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-montserrat bg-gradient-to-r from-brand-red to-brand-turquoise bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 font-open-sans">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center font-open-sans">
                        <Icon name="Check" size={16} className="text-brand-turquoise mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-brand-red to-brand-turquoise hover:opacity-90' 
                        : 'bg-gray-100 text-brand-gray hover:bg-brand-red hover:text-white'
                    } transition-all duration-300`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-gradient-to-r from-brand-turquoise/10 to-brand-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat text-brand-gray mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-brand-yellow fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 font-open-sans italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold font-montserrat text-brand-gray">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 font-open-sans">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Section */}
      <section id="channel" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold font-montserrat text-brand-gray mb-6">
              Наш канал
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-open-sans">
              Следите за актуальными трендами и получайте полезные советы по SMM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://t.me/ezeyextman', '_blank')}
                size="lg"
                className="bg-gradient-to-r from-brand-turquoise to-brand-blue hover:opacity-90 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-montserrat"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </Button>
              <Button 
                onClick={() => window.open('https://vk.com/koristaru', '_blank')}
                size="lg" 
                variant="outline"
                className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-montserrat"
              >
                VK группа
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-gradient-to-br from-brand-gray to-brand-purple">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold font-montserrat mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl mb-12 font-open-sans opacity-90">
              Свяжитесь с нами и получите персональную консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={24} className="text-brand-turquoise" />
                <span className="text-lg font-open-sans">info@smmteam.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={24} className="text-brand-turquoise" />
                <span className="text-lg font-open-sans">+7 (495) 123-45-67</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://t.me/ezeyextman', '_blank')}
                size="lg"
                className="bg-white text-brand-gray hover:bg-brand-turquoise hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-montserrat font-semibold"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button 
                onClick={() => window.open('https://vk.com/koristaru', '_blank')}
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-gray px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-montserrat font-semibold"
              >
                Связаться в VK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold font-montserrat bg-gradient-to-r from-brand-red to-brand-turquoise bg-clip-text text-transparent mb-4">
                SMM ↗
              </div>
              <p className="text-gray-400 font-open-sans">
                Превращаем ваши социальные сети в мощный инструмент продаж
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-montserrat mb-4">Услуги</h3>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">SMM продвижение</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Контент-план</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Таргетинг</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-montserrat mb-4">Компания</h3>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-brand-turquoise transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-montserrat mb-4">Контакты</h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open('https://t.me/ezeyextman', '_blank')}
                  className="bg-brand-turquoise hover:bg-brand-blue text-white w-full transition-all duration-300"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button 
                  onClick={() => window.open('https://vk.com/koristaru', '_blank')}
                  variant="outline" 
                  className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white w-full transition-all duration-300"
                >
                  VK
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              © 2024 SMM Team. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;