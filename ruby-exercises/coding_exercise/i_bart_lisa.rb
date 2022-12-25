# frozen_string_literal: true

def list(names)
  result = ''
  names.each_with_index do |name, index|
    result += if index < names.size - 2
                "#{name[:name]}, "
              elsif index == names.size - 2
                "#{name[:name]} "
              elsif names.size == 1
                name[:name]
              else
                "& #{name[:name]}"
              end
  end
  puts result
end

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
list([{ name: 'Bart' }, { name: 'Lisa' }])
list([{ name: 'Bart' }])
list([])
