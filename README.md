# problems
test task

Приложено само тестовое задание и соответствующие файлы.

1) первая задача
каждому распределению соответствует своя функция:
  distribution_N - нормальное
  distribution_U - равномерное
  distribution_p - точка
  distribution_e - экспоненциальное
 кусочно рекурсивное распределение реализовано как список, в котором каждый элемент отвечает за распределение
 в элементе указано первым параметром вероятность а вторым описание распределения, участвующего с данной вероятностью. 
 Так, например, distribution_1 = [100, ['U', 1, 2]] отвечает равномерному распределению на отрезке [1,2]
 а distribution_2 = [[50, ['p',0]],[50, distribution_1]] является распределением, в котором 2 куска
 кусок1: 0 c вероятностью 50% 
 кусок2: равномерное на [1,2] c вероятностью 50%
 
2) вторая задача 

Посколько с условие говорится, что в полоске стоят цифры, то несложно посчитать максимальновозмжные очки за отступ. Это 9*8 = 72.
В примерах для конкретных линий выдается res, где res[i] - всевозможные отступы, очки котороых равны i.
Сама программа реализована так, что очки не пересчитываются, а просто счиатаются по отступу, по скольку преесчет для 3x3 не оправдан.
shift([a,b,c]) по отступу строит квадрат 3x3, построенный по данному отступу
calculate_points по квадрату 3x3 считает очки за него
compute_scores по линиям выдает res
