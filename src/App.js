import Grade from "./grade";

const scoreboard = [
  {
    name: "수학",
    teacher: "류형식, 류우성",
    grade: "A+",
    fullName: "수학I",
    description: "중간고사를 87점 받았으나, 운좋게도 A+임.",
  },
  {
    name: "물리",
    teacher: "Link",
    grade: "A+",
    fullName: "기초물리학및실험I",
    description: "운좋게도 수행에서 감점되지 않음.",
  },
  {
    name: "화학",
    teacher: "정재준",
    grade: "A0",
    fullName: "기초화학및실험I",
    description:
      "실험1에서 농도 계산 오류로 인하여 2점 감점, 글쓰기 수행평가에서 1점 감점, 실험2에서 전원장치를 끄지 않아 1점 감점되었음.",
  },
  {
    name: "생물",
    teacher: "이선주",
    grade: "A0",
    fullName: "기초생명과학및실험I",
    description:
      "추세선의 파장 값을 정확히 유추하지 못하여 1점 감점, 단백질의 농도를 정확히 계산하지 못하여 1점 감점, 중간 고사 성적 1학년 5반 최하위로 A0를 받음.",
  },
  {
    name: "지구과학",
    teacher: "이영훈",
    grade: "A0",
    fullName: "기초지구과학및실험I",
    description: '중간고사 "78"점, 기말고사 94점으로 A0를 받음.',
  },
  {
    name: "영어",
    teacher: "독학",
    grade: "A+",
    fullName: "영어I",
    description: "운이 좋았음.",
  },
  {
    name: "사회",
    teacher: "독학",
    grade: "A+",
    fullName: "사회I",
    description: "운이 좋았음.",
  },
  {
    name: "국어",
    teacher: "독학",
    grade: "A0",
    fullName: "국어I",
    description:
      "단편 소설 감상문 쓰기 활동에서 1점 감점되었음. 기말 고사 못 봄.",
  },
  {
    name: "정보",
    teacher: "이권수",
    grade: "A-",
    fullName: "정보과학I",
    description: "중간고사 94점, 기말고사 47.5점, 수행 60점으로 A-를 받음.",
  },
  {
    name: "학점",
    teacher: "김서현",
    grade: "4.11",
    fullName: "1학년 1학기 평점",
    description: "권현민보다 0.01점 낮음.",
  },
];

function App() {
  return (
    <div>
      <ul class="lists">
        {scoreboard.map((score) => (
          <li>
            <Grade
              name={score.name}
              grade={score.grade}
              fullName={score.fullName}
              description={score.description}
              teacher={score.teacher}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
