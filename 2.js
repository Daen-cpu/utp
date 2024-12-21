public class GeometricFigures {

    // Класс для прямоугольника
    public static class Rectangle {
        private double width;
        private double height;

        // Конструктор прямоугольника
        public Rectangle(double width, double height) {
            if (width <= 0 || height <= 0) {
                throw new RuntimeException("There is no figure with such parameters.");
            }
            this.width = width;
            this.height = height;
        }

        // Метод для вычисления площади
        public double calculateArea() {
            return width * height;
        }

        // Метод для вычисления периметра
        public double calculatePerimeter() {
            return 2 * (width + height);
        }
    }

    // Класс для круга
    public static class Circle {
        private double radius;

        // Конструктор круга
        public Circle(double radius) {
            if (radius <= 0) {
                throw new RuntimeException("There is no figure with such parameters.");
            }
            this.radius = radius;
        }

        // Метод для вычисления площади
        public double calculateArea() {
            return Math.PI * radius * radius;
        }

        // Метод для вычисления периметра (длины окружности)
        public double calculatePerimeter() {
            return 2 * Math.PI * radius;
        }
    }

    // Класс для треугольника
    public static class Triangle {
        private double a;
        private double b;
        private double c;

        // Конструктор треугольника
        public Triangle(double a, double b, double c) {
            if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || b + c <= a || c + a <= b) {
                throw new RuntimeException("There is no figure with such parameters.");
            }
            this.a = a;
            this.b = b;
            this.c = c;
        }

        // Метод для вычисления площади по формуле Герона
        public double calculateArea() {
            double s = (a + b + c) / 2; // Полупериметр
            return Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Формула Герона
        }

        // Метод для вычисления периметра
        public double calculatePerimeter() {
            return a + b + c;
        }
    }

    // Основной класс для тестирования
    public static void main(String[] args) {
        try {
            // Создаем объект прямоугольника
            Rectangle rectangle = new Rectangle(5, 10);
            System.out.println("Rectangle Area: " + rectangle.calculateArea());
            System.out.println("Rectangle Perimeter: " + rectangle.calculatePerimeter());

            // Создаем объект круга
            Circle circle = new Circle(7);
            System.out.println("Circle Area: " + circle.calculateArea());
            System.out.println("Circle Perimeter: " + circle.calculatePerimeter());

            // Создаем объект треугольника
            Triangle triangle = new Triangle(3, 4, 5);
            System.out.println("Triangle Area: " + triangle.calculateArea());
            System.out.println("Triangle Perimeter: " + triangle.calculatePerimeter());

        } catch (RuntimeException e) {
            // Обработка ошибки, если фигура с такими параметрами не существует
            System.out.println(e.getMessage());
        }
    }
}
