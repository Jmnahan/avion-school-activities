# frozen_string_literal: true

# basic games class
class Games
  def title
    ''
  end

  def player_support
    ''
  end
end

# games inheritance
class FreeToPlay < Games
  def title
    'League of Legends'
  end

  def player_support
    'Online Competitive'
  end
end

# games inheritance
class MassMultiOnline < Games
  def title
    'Final Fantasy XIV'
  end

  def player_support
    'Multiplayer'
  end
end

def display_game(msg)
  puts "if you like #{msg.player_support} games you should try #{msg.title}"
end

o = FreeToPlay.new
p = MassMultiOnline.new
display_game(o)
display_game(p)
