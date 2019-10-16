class Caesar
   
        def initialize
                # original
            @Plaintext = {
                A:0,B:1,C:2 , D: 3 ,E:4,F:5 ,G:6, H:7,I:8,J:9,K:10,L:11,M:12,N:13,
                O:14, P:15,Q:16,R:17 , S:18 , T:19 ,U:20,V:21 ,W:22,X:23,Y:24,Z:25
            }
            # encryption
            @Ciphertex  ={
            D:0,E:1,F:2 , G:3 ,H:4,I:5 ,J:6,K:7,L:8,M:9,N:10,O:11,P:12,Q:13,
            R:14, S:15,T:16,U:17 , V:18 , W:19 ,X:20,Y:21 ,Z:22,A:23,B:24,C:25
            }

            
        end
def decrypt word
chars = word.split('')
 result = ""
chars.each { |c|
    char = c.upcase 
    # puts (((@Plaintext[:"#{char}"].to_i) -3) % 26)
    # puts @Ciphertex.key(((@Plaintext[:"#{char}"].to_i) -3) % 26).to_s
    if char == " "
        result = result + " "
    else
    result = result + @Ciphertex.key(((@Plaintext[:"#{char}"].to_i) + 3) % 26).to_s
    end
}
result.downcase
    # Plaintext = (Ciphertext - Key) mod 26
end
def encryption

end
end

puts Caesar.new.decrypt("I LIKE PIZZA")
puts Caesar.new.decrypt("Ck xk bkxe kdiozkj zngz kbkxeutk corr iusk zu cgzin mgsk ul znxutky gz luax gs ut sutjge"    )