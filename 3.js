import java.util.ArrayList;
import java.util.Collections;

// Абстрактный класс Student
abstract class Student {
    protected String fullName;
    protected int course;
    protected int lastExamGrade;

    // Конструктор для инициализации студентов
    public Student(String fullName, int course, int lastExamGrade) {
        this.fullName = fullName;
        this.course = course;
        this.lastExamGrade = lastExamGrade;
    }

    // Абстрактный метод для реализации написания экзамена
    public abstract void writeExam();

    // Геттеры для получения данных
    public String getFullName() {
        return fullName;
    }

    public int getCourse() {
        return course;
    }

    public int getLastExamGrade() {
        return lastExamGrade;
    }
}

// Класс IUStudent, наследующий Student
class IUStudent extends Student {

    public IUStudent(String fullName, int course, int lastExamGrade) {
        super(fullName, course, lastExamGrade);
    }

    @Override
    public void writeExam() {
        System.out.println(fullName + " с курса " + course + " на направлении 'Информационные технологии' пишет экзамен.");
    }
}

// Класс MathStudent, наследующий Student
class MathStudent extends Student {

    public MathStudent(String fullName, int course, int lastExamGrade) {
        super(fullName, course, lastExamGrade);
    }

    @Override
    public void writeExam() {
        System.out.println(fullName + " с курса " + course + " на математическом направлении пишет экзамен.");
    }
}

// Класс для работы с массивом строк
class StringArrayHandler {
    private ArrayList<String> strings;

    public StringArrayHandler() {
        this.strings = new ArrayList<>();
    }

    // Метод для добавления строки в массив
    public void addString(String str) {
        strings.add(str);
        Collections.sort(strings, (s1, s2) -> Integer.compare(s1.length(), s2.length()));
    }

    // Метод для получения самой длинной строки
    public String getMaxLengthString() {
        if (strings.isEmpty()) {
            return null;
        }
        return strings.get(strings.size() - 1);
    }

    // Метод для вычисления средней длины строк в массиве
    public double getAverageLength() {
        if (strings.isEmpty()) {
            return 0.0;
        }
        int totalLength = 0;
        for (String str : strings) {
            totalLength += str.length();
        }
        return (double) totalLength / strings.size();
    }
}

// Основной класс для тестирования
public class Main {
    public static void main(String[] args) {
        // Тестирование абстрактного класса Student и его наследников
        Student student1 = new IUStudent("Иванов Иван Иванович", 3, 85);
        Student student2 = new MathStudent("Петров Петр Петрович", 2, 92);

        student1.writeExam();
        student2.writeExam();

        // Тестирование класса StringArrayHandler
        StringArrayHandler handler = new StringArrayHandler();
        handler.addString("Книга");
        handler.addString("Компьютер");
        handler.addString("Автомобиль");

        System.out.println("Самая длинная строка: " + handler.getMaxLengthString());
        System.out.println("Средняя длина строк: " + handler.getAverageLength());
    }
}
