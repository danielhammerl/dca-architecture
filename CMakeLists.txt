cmake_minimum_required(VERSION 3.23)
project(dca_core VERSION 0.4)
include(GNUInstallDirs)

set(CMAKE_CXX_STANDARD 20)
add_library(dca_core INTERFACE)
target_compile_features(dca_core INTERFACE cxx_std_20)

target_include_directories(dca_core INTERFACE ${CMAKE_CURRENT_SOURCE_DIR}/include)

install(TARGETS dca_core
        EXPORT ${PROJECT_NAME}_Targets
        ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
        LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
        RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR})

include(CMakePackageConfigHelpers)
write_basic_package_version_file("DcaCoreConfigVersion.cmake"
        VERSION ${PROJECT_VERSION}
        COMPATIBILITY SameMajorVersion)

install(FILES "${PROJECT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
        "${PROJECT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake"
        DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/${PROJECT_NAME}/cmake)