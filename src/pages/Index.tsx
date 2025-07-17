import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Цифровая Полития
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#technologies" className="text-sm font-medium hover:text-primary transition-colors">
                Технологии
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                Портфолио
              </a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="hidden md:flex" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Mail" className="h-4 w-4 mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/85 to-slate-800/70"
          style={{
            backgroundImage: `url('/img/60691ed3-a1a5-42d9-9a51-5925c4b27ff8.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Icon name="Zap" className="h-3 w-3 mr-1" />
              IT-разработка нового поколения
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-slate-300">Цифровая Полития</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#ffffff]">
              Создаем веб-приложения со сложным функционалом. Собственные продукты и аутсорсинг на стеке 
              <span className="font-semibold text-slate-400"> Ruby on Rails + PostgreSQL + React</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Rocket" className="h-5 w-5 mr-2" />
                Заказать проект
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Eye" className="h-5 w-5 mr-2" />
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши технологии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Используем современный стек для создания масштабируемых решений</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="Gem" className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Ruby on Rails</CardTitle>
                <CardDescription>Серверная разработка</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Мощный фреймворк для создания надежных веб-приложений с богатым функционалом
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Database" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">PostgreSQL</CardTitle>
                <CardDescription>База данных</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Надежная реляционная база данных для хранения и обработки сложных данных
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Icon name="Code" className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">React</CardTitle>
                <CardDescription>Фронтенд</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Современный фреймворк для создания интерактивных пользовательских интерфейсов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Специализируемся на веб-приложениях со сложным функционалом. Работаем под ключ или дорабатываем существующие проекты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Разработка под ключ</CardTitle>

              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Создаем уникальные веб-приложения под ваши бизнес-задачи. Полный цикл разработки от идеи до запуска.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MVP</Badge>
                  <Badge variant="secondary">Масштабирование</Badge>
                  <Badge variant="secondary">Поддержка</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Icon name="Settings" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Доработка существующих проектов</CardTitle>

              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Дорабатываем действующие приложения на стеке заказчика. Оптимизация, новый функционал, интеграции.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Оптимизация</Badge>
                  <Badge variant="secondary">Интеграции</Badge>
                  <Badge variant="secondary">Рефакторинг</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ - от собственных продуктов до сложных заказных решений
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">gapi.ru</CardTitle>
                    <CardDescription>Платформа монетизации контента</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Собственная разработка</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Комплексная платформа для создателей контента с системой монетизации, аналитикой и инструментами управления.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Ruby on Rails</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" onClick={() => window.open('https://gapi.ru', '_blank')}>
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  Посетить сайт
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">earth2.io</CardTitle>
                    <CardDescription>Метавселенная с привязкой к картам</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">Разработка на заказ</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Инновационная метавселенная, интегрированная с реальными географическими данными. Сложная архитектура и высокие нагрузки.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Геоданные</Badge>
                  <Badge variant="outline">Высокие нагрузки</Badge>
                  <Badge variant="outline">Интеграции</Badge>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" onClick={() => window.open('https://earth2.io', '_blank')}>
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  Посетить сайт
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Связаться напрямую</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">malroc@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Code" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Специализация</h4>
                    <p className="text-muted-foreground">Веб-приложения со сложным функционалом</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Zap" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Технологии</h4>
                    <p className="text-muted-foreground">Ruby on Rails + PostgreSQL + React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Code" className="h-6 w-6 text-primary" />
              <span className="font-semibold">АО Цифровая Полития</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 Цифровая Полития. Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}