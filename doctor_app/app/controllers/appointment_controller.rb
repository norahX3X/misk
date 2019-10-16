class AppointmentController < ApplicationController
  def index
    @appointments = Appointment.all

  end

  def show
  end

  def new
    @appointment = Appointment.new   
  end

  def edit

  end
  def create
    puts params
    @appointment = Appointment.create(appointment_params)
    redirect_to  appointment_path
  end

  private

    def appointment_params
      params.require(:appointment).permit(:doctor_id, :patient_id, :reason)
    end
end
