require 'test_helper'

class HobbyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get hobby_index_url
    assert_response :success
  end

  test "should get show" do
    get hobby_show_url
    assert_response :success
  end

  test "should get edit" do
    get hobby_edit_url
    assert_response :success
  end

  test "should get new" do
    get hobby_new_url
    assert_response :success
  end

  test "should get destroy" do
    get hobby_destroy_url
    assert_response :success
  end

end
