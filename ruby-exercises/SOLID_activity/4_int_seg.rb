# frozen_string_literal: true

# basic medicalpersonnel class
class MedicalPersonnel
  def help_people
    'Medical personnels help people recover'
  end
end

# medicalpersonnel inheritance
class Surgeon < MedicalPersonnel
  def help_people
    'Medical personnels help people recover'
  end

  def operate_patient
    'Surgeons operate on patient'
  end
end

# medicalpersonnel inheritance
class Nurse < MedicalPersonnel
  def help_people
    'Medical personnels help people recover'
  end

  def assist_doctor
    'Nurses help and assist doctors'
  end
end

puts Surgeon.new.operate_patient
puts Nurse.new.assist_doctor
