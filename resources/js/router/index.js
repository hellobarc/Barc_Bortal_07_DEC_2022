import { createRouter, createWebHistory } from "vue-router";
import PagenotfoundComponent from "../common_component/PagenotfoundComponent.vue";
import AllLessonComponent from "../content_developer/AllLesson.vue";
import ArticleComponent from "../content_developer/ArticleComponent.vue";
import AudiotrackComponent from "../content_developer/AudioTrack.vue";
import AllArticlesComponent from "../content_developer/AllArticles.vue";
import WritingTask from "../content_developer/WritingTask.vue";
import LessonListComponent from "../student_components/LessonListComponent.vue";
import LessonReview from "../student_components/LessonReview.vue";
import ReadingStudy from "../student_components/ReadingComponent.vue";
import ContentQuizReading from "../content_developer/QuizReading.vue";
import QuizListening from "../content_developer/QuizListening.vue";
import LessonComponent from "../content_developer/LessonComponent.vue";
import QuizVocabulary from  "../content_developer/QuizVocabulary.vue";
import ContentMaking  from "../content_developer/QuizMaking.vue";

import StudentDashboard from "../student_components/DashboardComponent.vue";
import StudentMycourse from "../student_components/MyCourse.vue";
import StudentAllcourse from "../student_components/StudentAllcourse.vue";
import StudentMyprofile from "../student_components/StudentProfile.vue"
import StudentSupport from "../student_components/StudentSupport.vue"
import StudentNotifications from "../student_components/StudentNotifications.vue"
import StudentChangepass from "../student_components/StudentChangepass.vue"
import StudentAttendance  from "../student_components/StudentAttenance.vue";
import StudentMylearning from "../student_components/StudentMylearning.vue";
import StudentClasstest from "../student_components/StudentClasstest.vue";
import Writingtest from "../student_components/WritingtestComponent.vue";

import StudentWritinglist from "../student_components/WritinglistComponent.vue";
import CourseDetail from "../student_components/CoursedetailComponent.vue";

import StudyPage from "../student_components/StudyPage.vue"

import StudetnSubmodule from "../student_components/SubmoduleComponent.vue";

import GrammarStudy from "../student_components/GrammarComponent.vue";
import VocabularyStudy from "../student_components/VocabularyComponent.vue";


import ModeratorDashboard from "../moderator/DashboardComponent.vue";
import ModeratorStudent from "../moderator/ModeratorStudent.vue";
import BatchManage from "../moderator/BatchManage.vue";
import ModeratorSupportTicket from "../moderator/ModeratorSupportTicket.vue";
import ModeratorNotification from "../moderator/ModeratorNotification.vue";
import ModeratorStudentattendance from "../moderator/ModeratorStudentattendance.vue";
import ModeratorAllcourse from "../moderator/ModeratorAllcourse.vue";

import InstructorDashboard from "../instructor/DashboardComponent.vue";
import InstructorWritingassess from "../instructor/InstructorWritingassess.vue";
import InstructorSpeakingassess from "../instructor/InstructorSpeakingassess.vue";
import InstructorExam from "../instructor/InstructorExam.vue";
import InstructorExamExcersize from "../instructor/InstructorExamExcersize.vue";
import InstructorExamArticle from "../instructor/InstructorExamArticle.vue";
import QuestionMaking from "../instructor/QuestionMaking";

import InstructorStudentattendance from "../instructor/InstructorStudentattendance.vue";
import ClasstestMarks from "../instructor/ClasstestMarks.vue";
import ClasstestList from "../instructor/ClasstestList.vue";
import CreateClasstest from "../instructor/CreateClasstest.vue";

import authentication from './middleware/auth';
import authcontent from './middleware/contentauth';
import studentmiddleware from './middleware/student';
import moderatorauth from "./middleware/moderatorauth";
import instructorauth from "./middleware/instructorauth";

const  routes = [
                    {
                        path: "/app",
                        name: "app",
                        component:() => import("../HomeComponent.vue"),
                        meta: {
                           // middleware: [authentication],
                          },
                        children:[
                            {
                                path: "/",
                                name: "home",
                                component:() => import("../home_components/WelcomeComponent.vue")
                            },
                            {
                                path: "/login",
                                name: "login",
                                component:() => import("../home_components/LoginComponent.vue")
                            },
                            {
                                path: "/signup",
                                name: "signup",
                                component:() => import("../home_components/SignupComponent.vue")
                            },
                            {
                                path: "/contact",
                                name: "contact",
                                component:() => import("../home_components/ContactComponent.vue")
                            },
                            {
                                path: "/blog",
                                name: "blog",
                                component:() => import("../home_components/BlogComponent.vue")
                            },
                        ]
                    },
                    {
                        path:"/auth",
                        name:"auth",
                        component:()=>import("../AuthComponent.vue"),
                        children:[
                            {
                                path: "/student/dashboard",
                                name: "student-dashboard",
                                component:StudentDashboard,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/mycourse",
                                name: "student-mycourse",
                                component:StudentMycourse,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/allcourse",
                                name: "student-allcourse",
                                component:StudentAllcourse,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/profile",
                                name: "student-myprofile",
                                component:StudentMyprofile,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/changepass",
                                name: "student-changepass",
                                component:StudentChangepass,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },

                            {
                                path: "/student/attendance",
                                name: "student-myattendance",
                                component:StudentAttendance,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/mylearning",
                                name: "student-mylearning",
                                component:StudentMylearning,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },

                            {
                                path: "/student/classtest",
                                name: "student-classtest",
                                component:StudentClasstest,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },

                            {
                                path: "/student/course",
                                name: "StudetnCourse",
                                component:() => import("../student_components/CourseComponent.vue")
                            },
                            {
                                path: "/course-detail/:course_id",
                                name: "course_detail",
                                component:CourseDetail,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/sub-module/:lesson/:module_id/:course_id",
                                name: "sub-module",
                                component:StudetnSubmodule,
                                meta: {
                                    middleware: [studentmiddleware],
                                }
                            },
                            {
                                path: "/student/lesson_list/:lesson/:module_id/:course_id",
                                name: "lesson_list",
                                component: LessonListComponent,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/lesson_review/:lesson_id/:module_id/:course_id",
                                name: "lesson_review",
                                component: LessonReview,
                                props: true,
                                meta: {
                                    middleware: [studentmiddleware],
                                  }
                            },
                            {
                                path: "/student/reading_study/:lesson/:lesson_id/:course_id",
                                name: "reading_study",
                                component:ReadingStudy,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/listening_study/:course_id/:lesson_id/:lesson/:module_id",
                                name: "listening_study",
                                component:() => import("../student_components/ListeningComponent.vue")
                            },
                            {
                                path: "/student/grammar_study/:course_id",
                                name: "grammar_study",
                                component:GrammarStudy,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/vocabulary_study/:course_id",
                                name: "vocabulary_study",
                                component:VocabularyStudy,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/study_page/:module_id/:lesson_id/:course_id/:template",
                                name: "study_page",
                                component:StudyPage,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/writing_list/:course_id",
                                name: "writing-list",
                                component:StudentWritinglist,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/writing_test/:question_id/:course_id/:task",
                                name: "writing-test",
                                component:Writingtest,
                            },
                            {
                                path: "/student/supportcenter",
                                name: "student-support",
                                component:StudentSupport,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/student/notifications",
                                name: "student-notifications",
                                component:StudentNotifications,
                                meta:{
                                    middleware: [studentmiddleware]
                                }
                            },
                            {
                                path: "/content/dashboard",
                                name: "content-dashboard",
                                component:() => import("../content_developer/DashboardComponent.vue"),
                                meta: {
                                    middleware: [authcontent],
                                  },
                            },
                            {
                                path: "/content/lesson/:module_id",
                                name: "content-lesson",
                                component:LessonComponent,
                                meta: {
                                    middleware: [authcontent],
                                  },
                            },
                            {
                                path: "/content/course/:course_id",
                                name: "content-course",
                                component:() => import("../content_developer/CourseComponent.vue")
                            },
                            {
                                path: "/content/article/:lesson",
                                name: "article",
                                component: ArticleComponent,
                            },
                            {
                                path: "/content/audiotrack/:lesson",
                                name: "audiotrack",
                                component: AudiotrackComponent
                            },
                            {
                                path: "/content/quizreding/:lesson",
                                name: "quiz_reading",
                                component:ContentQuizReading,
                                meta: {
                                    middleware: [authcontent]
                                },
                            },
                            { // akhon theke quiz making e zabe not quizreading or vuca
                                path: "/content/quizmaking/:module_id/:lesson_id",
                                name: "quiz_making",
                                component:ContentMaking,
                                meta: {
                                    middleware: [authcontent]
                                },
                            },
                            {
                                path: "/content/quizlistening/:lesson",
                                name: "quiz_listening",
                                component: QuizListening,
                                meta: {
                                    middleware: [authcontent],
                                  },
                            },
                            {
                                path: "/content/quizvocabulary/:lesson_id",
                                name: "quiz_vocabulary",
                                component:QuizVocabulary,
                                meta: {
                                    middleware: [authcontent],
                                  },
                            },
                            {
                                path: "/content/quizwriting/:lesson/:module",
                                name: "quiz_grammar",
                                component:() => import("../content_developer/QuizWriting.vue")
                            },
                            {
                                path:"/content/all_lesson",
                                name:"all_lesson",
                                component: AllLessonComponent,
                                meta: {
                                    middleware: [authcontent]
                                },
                            },
                            {
                                path:"/content/all_articles",
                                name:"all_articles",
                                component: AllArticlesComponent,
                                meta: {
                                    middleware: [authcontent],
                                },
                            },

                            {
                                path:"/content/article_update",
                                name:"article_update",
                                component:() => import("../content_developer/AllArticles.vue")
                            },
                            {
                                path:"/content/all_listening_track",
                                name:"all_listening_track",
                                component:() => import("../content_developer/AllListeningtrack.vue")
                            },
                            {
                                path:"/content/all_quizes",
                                name:"all_quizes",
                                component:() => import("../content_developer/AllQuizes.vue")
                            },
                            {
                                path:"/content/writing_task",
                                name:"writing_task",
                                component:WritingTask,
                                meta: {
                                    middleware: [authcontent],
                                },
                            },
                            {
                                path:"/content/all_extras",
                                name:"all_extras",
                                component:() => import("../content_developer/AllExtras.vue")
                            },
                             {
                                path: "/moderator/dashboard",
                                name: "moderator-dashboard",
                                component:ModeratorDashboard,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/allcourse",
                                name: "moderator-allcourse",
                                component:ModeratorAllcourse,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },

                            {
                                path: "/moderator/student",
                                name: "moderator-student",
                                component:ModeratorStudent,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/student-attendance",
                                name: "student-attendance",
                                component:ModeratorStudentattendance,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/batches",
                                name: "batch-manage",
                                component:BatchManage,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/support-tickets",
                                name: "moderator-support-ticket",
                                component:ModeratorSupportTicket,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/support-tickets-reply",
                                name: "moderator-support-ticket-reply",
                                component:ModeratorSupportTicket,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/moderator/notification",
                                name: "moderator-notification",
                                component:ModeratorNotification,
                                meta: {
                                    middleware: [moderatorauth],
                                },
                            },
                            {
                                path: "/instructor/dashboard",
                                name: "instructor-dashboard",
                                component:InstructorDashboard,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },

                            {
                                path: "/instructor/class-test-list",
                                name: "class-test-list",
                                component:ClasstestList,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },

                            {
                                path: "/instructor/class-test-marks/:test_id",
                                name: "class-test-marks",
                                component:ClasstestMarks,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },

                            {
                                path: "/instructor/create-class-test",
                                name: "create-class-test",
                                component:CreateClasstest,
                                meta: {
                                    middleware: [instructorauth],
                                  }
                            },

                            {
                                path: "/instructor/writing-assess",
                                name: "writing-assess",
                                component:InstructorWritingassess,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },
                            {
                                path: "/instructor/speaking-assess",
                                name: "speaking-assess",
                                component:InstructorSpeakingassess,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },
                            {
                                path: "/instructor/exam-list",
                                name: "exam-list",
                                component:InstructorExam,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },
                            {
                                path: "/instructor/manage-excersize/:exam_id",
                                name: "instructor-manage-excersize",
                                component:InstructorExamExcersize,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },
                            {
                                path: "/instructor/exam/article/:excersize_id",
                                name: "instructor-exam-article",
                                component: InstructorExamArticle,
                            },
                            {
                                path: "/instructor/exam/quesion/:excersize_id/:excersize_module",
                                name: "instructor-exam-question",
                                component: QuestionMaking,
                            },
                            {
                                path: "/instructor/student-attendance",
                                name: "instructor-student-attendance",
                                component:InstructorStudentattendance,
                                meta: {
                                    middleware: [instructorauth],
                                },
                            },

                        ]
                    },
                    {
                        path: '/:catchAll(.*)*',
                        name: '404',
                        component: PagenotfoundComponent,
                        name: 'page-not-found'
                    }
            ]




export default createRouter({
    history:createWebHistory('/'),
    routes,
});
