cmake_minimum_required(VERSION 3.23)
project(dca_architecture)

set(CMAKE_CXX_STANDARD 20)
add_library(dca_architecture INTERFACE)

set_target_properties(dca_architecture PROPERTIES LINKER_LANGUAGE CXX)
target_include_directories(dca_architecture INTERFACE ./include)

include(GNUInstallDirs)

install(TARGETS ${PROJECT_NAME}
        EXPORT "${PROJECT_NAME}Targets"
        PUBLIC_HEADER DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/${PROJECT_NAME} # include/SomeLibrary
        INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR} # include
        )