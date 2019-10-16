# puts "I don't like you"

# ['nora','sara','dema'].each{|name| puts name.capitalize}

# puts "Ask me?"
# input= gets.chomp
# puts " oh that #{input}"
# #$ global
# #@instant varibal

# #  some = "hi!"

# # puts some.nil?
# #  some =nil
# # puts some.nil?
# puts 1...5

# elsif 


# name = ""
# while name.empty?
#     puts "What's ur name?"
#     name= gets.chomp
# end

# age = 0
# puts "Hello #{name}"
# while age.zero?
#     puts "How old are you?"
#     age= gets.chomp.to_i
# end
# i=1
# while i<5 do
#     puts i
#     i= i+1
# end

# i=0
# until i>2 do
#  puts i 
#  i= i+1
# end

# loop do 
#     puts "What's ur name?"
#     name= gets.chomp
# break if !name.empty?
# end
# puts "You're allowed to enter the club!" unless age < 22
# if age > 18 
#     puts "You're allowed to enter the club!"
# else
#     puts "You're NOT allowed to enter the club!"
# end
# p(11..90)
# :yay="jj"
# p :yay.object_id
# p 2.object_id
# p .object_id
# p :yay.object_id
# yay = "jjknnkn"
# sara = :yay

# 2 ** 3
# my_favorite_number = 13
# puts "My favorite number is: #{my_favorite_number}"
# my_favorite_number = 13
# puts "My favorite number is: " + my_favorite_number
# [ f] false
# [ f] 0
# [t ] ""
# [f ] null
# [t ] [ ] (empty array)
# [ f] undefined
# [f ] NaN
# [f ] nil

# p  false?


def full_name (first, secound)
    return first+ " " +secound

end 

puts full_name("Nora", "Alkhunifer")


def palindrome?(word)
    if word.reverse == word
        return true
    else
        return false 
    end
end 

p palindrome?("ebere")
p palindrome?("racecar")

def word_counter(word)
   splited_word= word.split(" ")
   return splited_word.length
    

end


p word_counter("The quick brown fox jumps over the lazy dog")
p word_counter("Bonjour Je suis Ebere")

def max(num1,num2)
    return num1 if (num1 <=> num2) == 1
    return num2
end
p max(5, 1)
p max(3, 9)

def converts_distance(distance)
 return distance / 0.62137
end 
p converts_distance(3)



