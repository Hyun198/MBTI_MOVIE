const questions = [
    {
        question: "사회 모임 후 기분이 어떠신가요?",
        choices: {
            A: { label: "에너지를 받고 활기차게 느낍니다.", type: "E" },
            B: { label: "에너지가 소모되어 혼자만의 시간이 필요합니다.", type: "I" },
        },
    },
    {
        question: "새로운 사람들을 만날 때 어떻게 반응하나요?",
        choices: {
            A: { label: "쉽게 다가가 대화를 시작합니다.", type: "E" },
            B: { label: "상대방이 먼저 다가오기를 기다립니다.", type: "I" },
        },
    },
    {
        question: "주말을 보내는 이상적인 방법은 무엇인가요?",
        choices: {
            A: {
                label: "친구들과 약속을 잡거나 사회적 활동에 참여합니다.",
                type: "E",
            },
            B: {
                label: "집에서 책을 읽거나 영화를 보는 등 혼자만의 시간을 즐깁니다.",
                type: "I",
            },
        },
    },
    {
        question: "토론이나 회의에서 자신의 의견을 어떻게 표현하나요?",
        choices: {
            A: { label: "적극적으로 의견을 공유하고 토론에 참여합니다.", type: "E" },
            B: {
                label:
                    "다른 사람의 의견을 듣고 내부적으로 생각을 정리한 후에 의견을 제시합니다.",
                type: "I",
            },
        },
    },
    {
        question: "여러 사람이 모인 자리에서 당신은 주로 어떤 역할을 하나요?",
        choices: {
            A: { label: "대화를 이끌고 분위기를 주도합니다.", type: "E" },
            B: { label: "관찰자의 위치에서 상황을 지켜보며 참여합니다.", type: "I" },
        },
    },
    {
        question: "새로운 환경에 처했을 때 어떻게 느끼나요?",
        choices: {
            A: {
                label: "흥분되고 새로운 가능성을 탐색하는 것을 즐깁니다.",
                type: "E",
            },
            B: {
                label: "조금 긴장되고 익숙해질 때까지 시간이 필요합니다.",
                type: "I",
            },
        },
    },
    {
        question: "일을 처리하는 방식에 대해 어떻게 생각하나요?",
        choices: {
            A: {
                label: "다른 사람과 협력하며 아이디어를 나누는 것을 선호합니다.",
                type: "E",
            },
            B: {
                label: "혼자서 집중하여 일하는 것이 더 효율적이라고 느낍니다.",
                type: "I",
            },
        },
    },
    {
        question: "새로운 프로젝트를 시작할 때 어떤 접근 방식을 선호하나요?",
        choices: {
            A: {
                label: "검증된 방법과 실제 경험을 바탕으로 계획을 세웁니다.",
                type: "S",
            },
            B: {
                label: "가능성을 탐구하고 창의적인 해결책을 모색합니다.",
                type: "N",
            },
        },
    },
    {
        question: "여가 시간에 어떤 활동을 선호하나요?",
        choices: {
            A: {
                label: "실제로 만지고 체험할 수 있는 취미 활동을 선호합니다.",
                type: "S",
            },
            B: {
                label:
                    "상상력을 사용하거나 개념적인 아이디어를 탐구하는 활동을 선호합니다.",
                type: "N",
            },
        },
    },
    {
        question: "새로운 사람을 만났을 때 어떤 것을 먼저 주목하나요?",
        choices: {
            A: {
                label: "그 사람의 외모와 행동과 같은 구체적인 특징입니다.",
                type: "S",
            },
            B: { label: "그 사람이 주는 전반적인 인상이나 분위기입니다.", type: "N" },
        },
    },
    {
        question: "의사결정을 할 때 어떤 기준을 사용하나요?",
        choices: {
            A: {
                label: "현재 상황과 관련된 구체적인 정보와 경험을 기반으로 합니다.",
                type: "S",
            },
            B: { label: "미래의 가능성과 자신의 직관을 기반으로 합니다.", type: "N" },
        },
    },
    {
        question: "책을 읽거나 영화를 볼 때 어떤 유형을 선호하나요?",
        choices: {
            A: {
                label: "현실적이고 구체적인 세부 사항이 잘 묘사된 이야기를 선호합니다.",
                type: "S",
            },
            B: {
                label:
                    "상상력을 자극하고 개념적인 주제를 탐구하는 이야기를 선호합니다.",
                type: "N",
            },
        },
    },
    {
        question: "회의나 강의에서 정보를 어떻게 기억하나요?",
        choices: {
            A: {
                label: "구체적인 사실, 숫자, 그리고 예시를 잘 기억합니다.",
                type: "S",
            },
            B: { label: "주요 개념, 패턴, 그리고 의미를 잘 기억합니다.", type: "N" },
        },
    },
    {
        question: "학습할 때 어떤 방식을 더 선호하나요?",
        choices: {
            A: {
                label: "단계별 지침과 구체적인 예제를 통해 배우는 것을 선호합니다.",
                type: "S",
            },
            B: {
                label: "개념적인 틀과 원리를 이해하면서 배우는 것을 선호합니다.",
                type: "N",
            },
        },
    },
    {
        question: "중대한 결정을 내릴 때 주로 무엇에 의존하나요?",
        choices: {
            A: { label: "명확한 기준과 논리적 분석을 사용합니다.", type: "T" },
            B: { label: "개인적 가치와 타인의 감정을 고려합니다.", type: "F" },
        },
    },
    {
        question: "갈등 상황에서 당신의 접근 방식은 어떤가요?",
        choices: {
            A: { label: "객관적 사실을 바탕으로 문제를 해결하려 합니다.", type: "T" },
            B: { label: "사람들의 감정을 우선시하고 화합을 추구합니다.", type: "F" },
        },
    },
    {
        question: "친구가 조언을 구할 때 어떻게 반응하나요?",
        choices: {
            A: { label: "해결책과 실질적인 조언을 제공합니다.", type: "T" },
            B: { label: "공감하고 감정적 지지를 제공합니다.", type: "F" },
        },
    },
    {
        question: "새로운 사람을 만날 때 어떤 것을 더 중요하게 생각하나요?",
        choices: {
            A: { label: "그 사람의 생각과 의견이 논리적인지 여부입니다.", type: "T" },
            B: {
                label: "그 사람과 감정적으로 얼마나 잘 연결되는지 여부입니다.",
                type: "F",
            },
        },
    },
    {
        question: "프로젝트나 과제를 평가받을 때 무엇을 더 선호하나요?",
        choices: {
            A: { label: "구체적이고 객관적인 피드백을 선호합니다.", type: "T" },
            B: { label: "격려와 긍정적인 강화를 선호합니다.", type: "F" },
        },
    },
    {
        question: "작업을 할 때 어떤 스타일을 선호하나요?",
        choices: {
            A: { label: "목표와 효율성에 중점을 둡니다.", type: "T" },
            B: { label: "팀워크와 개인 간의 조화에 중점을 둡니다.", type: "F" },
        },
    },
    {
        question: "문제 해결 시 당신의 접근 방식은 무엇인가요?",
        choices: {
            A: { label: "문제를 분석하고 체계적으로 접근합니다.", type: "T" },
            B: { label: "직관과 개인적 경험을 바탕으로 접근합니다.", type: "F" },
        },
    },
    {
        question: "평가를 내릴 때 어떤 기준을 더 중시하나요?",
        choices: {
            A: { label: "정확성과 공정성을 중시합니다.", type: "T" },
            B: { label: "관계와 사람들의 필요를 중시합니다.", type: "F" },
        },
    },
    {
        question: "새로운 아이디어나 제안을 받아들일 때 주로 무엇을 고려하나요?",
        choices: {
            A: {
                label: "아이디어가 얼마나 논리적이고 실용적인지를 고려합니다.",
                type: "T",
            },
            B: {
                label: "아이디어가 사람들에게 어떤 영향을 미칠지를 고려합니다.",
                type: "F",
            },
        },
    },
    {
        question: "리더십을 발휘할 때 당신의 스타일은 어떤가요?",
        choices: {
            A: { label: "결정적이고 목표 지향적입니다.", type: "T" },
            B: {
                label: "포용적이고 사람들을 동기부여하는 데 중점을 둡니다.",
                type: "F",
            },
        },
    },
    {
        question: "계획을 세울 때 어떻게 하나요?",
        choices: {
            A: {
                label: "미리 계획을 세우고 그 계획을 따르는 것을 선호합니다.",
                type: "J",
            },
            B: {
                label: "유연하게 대처하고 계획을 변경하는 것에 개방적입니다.",
                type: "P",
            },
        },
    },
    {
        question: "일상 생활에서 얼마나 조직적인가요?",
        choices: {
            A: {
                label: "일과를 정리하고 체계적으로 유지하는 것을 중요하게 생각합니다.",
                type: "J",
            },
            B: {
                label: "일과가 유동적이며 조직보다는 융통성을 중요시합니다.",
                type: "P",
            },
        },
    },
    {
        question: "여가 시간을 어떻게 보내나요?",
        choices: {
            A: {
                label: "여가 활동도 일정에 포함시키고 계획적으로 보냅니다.",
                type: "J",
            },
            B: { label: "기분이나 상황에 따라 spontane하게 결정합니다.", type: "P" },
        },
    },
    {
        question: "팀 프로젝트에서의 역할은?",
        choices: {
            A: {
                label: "프로젝트의 계획과 진행을 주도하는 역할을 맡습니다.",
                type: "J",
            },
            B: {
                label: "유연하게 다양한 역할을 맡고 상황에 따라 조정합니다.",
                type: "P",
            },
        },
    },
    {
        question: "결정을 내릴 때 어떤 과정을 거치나요?",
        choices: {
            A: { label: "가능한 빨리 결정을 내리고 결과에 집중합니다.", type: "J" },
            B: {
                label: "여러 옵션을 탐색하며 결정을 미루는 경향이 있습니다.",
                type: "P",
            },
        },
    },
    {
        question: "일을 처리하는 방식은 어떤가요?",
        choices: {
            A: {
                label: "한 번에 하나의 일을 끝내고 다음 일로 넘어가는 것을 선호합니다.",
                type: "J",
            },
            B: {
                label: "여러 가지 일을 동시에 진행하는 것이 자연스럽습니다.",
                type: "P",
            },
        },
    },
];

const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
};

function MakingQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function answerQuestion(index, choice) {
    const selectedChoice = questions[index].choices[choice];
    counts[selectedChoice.type] += 1;
    console.log(
        `질문: ${questions[index].question}, 선택: ${selectedChoice.label}`
    );
}

function displayRandomQuestion() {
    const question = MakingQuestion().question;
    console.log(question);
}

export default questions;
