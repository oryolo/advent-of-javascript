class ChallengesController < ApplicationController
  def show
    challenge = params[:name]
    case challenge
    when "day_1"
      render "day_1"
    else
      render "day_2"
    end
  end
end
