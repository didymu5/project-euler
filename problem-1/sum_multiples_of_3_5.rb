def getMultiplesOf3and5(num)
  numArr = []
  (1..num).each do |num|
    num-=1
    puts 10.modulo(3)
    if num % 3 == 0 || num % 5 == 0
      numArr.push(num)
    end
  end
  puts numArr.reduce(0, :+)

end

getMultiplesOf3and5(10)