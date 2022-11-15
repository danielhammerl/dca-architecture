cmake_minimum_required(VERSION 3.23)
project(dca_core VERSION 0.4)
include(GNUInstallDirs)

set(CMAKE_CXX_STANDARD 20)

add_library(dca_core INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/include)
target_include_directories(dca_core INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/include)